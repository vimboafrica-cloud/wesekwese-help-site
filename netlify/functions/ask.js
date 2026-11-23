// "Ask our AI assistant" - answers a visitor's question using Groq's free LLM API,
// restricted to this Help Center's own content (never invents setup steps for Wese~Kwese).
//
// The Help Center has grown past what fits in Groq's free-tier tokens-per-minute budget for one
// request (8000 TPM on openai/gpt-oss-20b; the full FAQ set alone already runs ~9000 tokens), so
// instead of sending every entry on every question, a simple keyword match picks only the entries
// that look relevant to the question actually asked - comfortably within budget, and it keeps
// scaling as more FAQ entries are added later.
const { FAQS } = require("../../content.js");

const MAX_CONTEXT_ENTRIES = 10;
const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "do", "does", "did", "how", "what", "why", "when",
  "where", "who", "can", "could", "should", "would", "i", "my", "me", "it", "its", "to", "for",
  "of", "on", "in", "and", "or", "if", "not", "no", "be", "been", "with", "this", "that", "from",
  "at", "as", "by", "we", "our", "you", "your",
]);

function stripHtml(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&rarr;/g, "->")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&middot;/g, "-")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const ENTRIES = FAQS.map((f) => ({
  q: f.q,
  tags: f.tags.toLowerCase(),
  qLower: f.q.toLowerCase(),
  bodyLower: stripHtml(f.a).toLowerCase(),
  text: `Q: ${f.q}\nA: ${stripHtml(f.a)}`,
}));

function wordsOf(text) {
  return (text.toLowerCase().match(/[a-z0-9]+/g) || []).filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function relevantContext(question) {
  const words = wordsOf(question);
  if (!words.length) return ENTRIES.slice(0, MAX_CONTEXT_ENTRIES).map((e) => e.text).join("\n\n");

  const scored = ENTRIES.map((e) => {
    let score = 0;
    for (const w of words) {
      if (e.tags.includes(w)) score += 3;
      if (e.qLower.includes(w)) score += 2;
      if (e.bodyLower.includes(w)) score += 1;
    }
    return { e, score };
  });
  scored.sort((a, b) => b.score - a.score);

  const top = scored.filter((s) => s.score > 0).slice(0, MAX_CONTEXT_ENTRIES);
  const chosen = top.length ? top : scored.slice(0, 4); // nothing matched - still give the model something
  return chosen.map((s) => s.e.text).join("\n\n");
}

function systemPrompt(context) {
  return (
    "You are the support assistant on the Wese~Kwese Help Center, for a school-fees system used by " +
    "Zimbabwean schools. Answer ONLY using the Help Center content below - never invent setup steps, menu " +
    "names, or behaviour that isn't in it. The content below is a relevant subset of a larger Help Center, " +
    "picked for this question - if it genuinely doesn't cover the question, say so plainly and point the " +
    "visitor to wesekwese@gmail.com or +263 79 047 5534 / +263 71 727 1915, rather than guessing. Keep " +
    "answers short and practical, like a help article, not a chat.\n\n--- HELP CENTER CONTENT ---\n" + context
  );
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let question;
  try {
    question = String(JSON.parse(event.body || "{}").question || "").trim();
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Bad request" }) };
  }
  if (!question) {
    return { statusCode: 400, body: JSON.stringify({ error: "Ask a question first." }) };
  }
  if (question.length > 500) {
    return { statusCode: 400, body: JSON.stringify({ error: "Keep the question under 500 characters." }) };
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "The AI assistant isn't set up yet - email or call us below." }) };
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [
          { role: "system", content: systemPrompt(relevantContext(question)) },
          { role: "user", content: question },
        ],
        temperature: 0.2,
        max_tokens: 400,
      }),
    });

    if (!res.ok) {
      console.error("Groq error", res.status, await res.text());
      return { statusCode: 502, body: JSON.stringify({ error: "The AI assistant is unavailable right now." }) };
    }

    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content?.trim();
    return {
      statusCode: 200,
      body: JSON.stringify({ answer: answer || "Sorry, I couldn't come up with an answer to that." }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 502, body: JSON.stringify({ error: "The AI assistant is unavailable right now." }) };
  }
};
