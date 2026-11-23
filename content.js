// Wese~Kwese Help Center content.
// Each entry: id, category, q (question), a (answer, plain HTML), tags (extra search keywords).
// Edit this file and redeploy to update the site - no build step needed.

const CATEGORIES = [
  "Step-by-step setup",
  "Fees & payments",
  "Students & classes",
  "Installing",
  "Networking & remote access",
  "Users, sign-in & passwords",
  "Backups & restoring",
  "Troubleshooting",
  "Licensing & upgrades",
];

const FAQS = [
  // ---------- Step-by-step setup ----------
  {
    id: "walkthrough-from-scratch",
    category: "Step-by-step setup",
    q: "Can you walk me through setting up a new school from scratch?",
    a: `<p>Here's the exact path a brand-new install follows, start to finish, captured stage by stage on a
      clean test copy of Wese~Kwese (click any screenshot to see it full size).</p>

    <div class="stage">
      <h3><span class="n">1</span>Welcome / first-run page</h3>
      <p>This appears automatically the first time the installed app is opened in a browser, on the server PC
        only.</p>
      <a href="assets/setup/01-welcome.jpg" target="_blank"><img src="assets/setup/01-welcome.jpg" alt="The Welcome first-run page" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">2</span>Fill in the Welcome form</h3>
      <p>Password, school name, how fees are billed (each term or each month), and the first Admin's name and
        sign-in username.</p>
      <a href="assets/setup/02-welcome-filled.jpg" target="_blank"><img src="assets/setup/02-welcome-filled.jpg" alt="The Welcome form filled in" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">3</span>Home, with the "Getting started" checklist</h3>
      <p>Signing in for the first time lands on Home, which shows a nine-step checklist that disappears once
        everything on it is done. The school's name is already ticked, since step 2 just set it.</p>
      <a href="assets/setup/03-home-checklist.jpg" target="_blank"><img src="assets/setup/03-home-checklist.jpg" alt="Home page with the Getting started checklist" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">4</span>Add the current term</h3>
      <p>Setup &rarr; Terms and months: year, term number, opening/closing dates, and tick "Is current" - this
        is the term new invoices and payments default to.</p>
      <a href="assets/setup/04-add-term.jpg" target="_blank"><img src="assets/setup/04-add-term.jpg" alt="Add term form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">5</span>Add the classes</h3>
      <p>Setup &rarr; Classes: a name and a sort order for each class (1A, 1B, Form 1...). A whole hierarchy
        can also be bulk-imported from a spreadsheet under Setup &rarr; Classes &rarr; Import.</p>
      <a href="assets/setup/05-add-class.jpg" target="_blank"><img src="assets/setup/05-add-class.jpg" alt="Add class form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">6</span>Add fee categories</h3>
      <p>Setup &rarr; Fee categories: a short code and description (e.g. "1 - Primary", "2 - Secondary") -
        each fee structure is set per category, so different groups of students can be charged differently.</p>
      <a href="assets/setup/06-add-fee-category.jpg" target="_blank"><img src="assets/setup/06-add-fee-category.jpg" alt="Add fee category form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">7</span>Add fee items</h3>
      <p>Setup &rarr; Fee items: the named funds fees are split across - Tuition, Levy, Sports, Building
        fund... Each one tracks its own money, separately.</p>
      <a href="assets/setup/07-add-fee-item.jpg" target="_blank"><img src="assets/setup/07-add-fee-item.jpg" alt="Add fee item form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">8</span>Set the fees for each category and term</h3>
      <p>Setup &rarr; Fee structures: pick the category, term and currency, then type an amount against each
        fee item - this is the actual bill a student in that category is charged for that term.</p>
      <a href="assets/setup/08-fee-structure.jpg" target="_blank"><img src="assets/setup/08-fee-structure.jpg" alt="Fee structure with Tuition and Levy amounts" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">9</span>Add a receipt book</h3>
      <p>Setup &rarr; Receipt books: a first and last number for the range this book covers - either one book
        for every payment method, or a separate book per method. Without an active book, payments can't be
        recorded at all.</p>
      <a href="assets/setup/09-receipt-book.jpg" target="_blank"><img src="assets/setup/09-receipt-book.jpg" alt="Add receipt book form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">10</span>Checklist progress</h3>
      <p>Back on Home, seven of the nine steps are already ticked off - just users and students left.</p>
      <a href="assets/setup/10-checklist-progress.jpg" target="_blank"><img src="assets/setup/10-checklist-progress.jpg" alt="Getting started checklist with most items ticked" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">11</span>Add the other people who will use the system</h3>
      <p>Users &rarr; Add a user: username, name, role (Admin, Bursar or General) and a temporary password -
        the new person chooses their own password the first time they sign in.</p>
      <a href="assets/setup/11-add-user.jpg" target="_blank"><img src="assets/setup/11-add-user.jpg" alt="Add a user form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">12</span>Add the students</h3>
      <p>Students &rarr; Add student, one at a time - or Students &rarr; Import sheets to register a whole
        school at once from a spreadsheet.</p>
      <a href="assets/setup/12-add-student.jpg" target="_blank"><img src="assets/setup/12-add-student.jpg" alt="Add student form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">13</span>Setup complete</h3>
      <p>Once every step is done, the checklist disappears for good. Home now just shows the day's real
        business - here, a reminder that the one student just added still needs an invoice for the term.</p>
      <a href="assets/setup/13-setup-complete.jpg" target="_blank"><img src="assets/setup/13-setup-complete.jpg" alt="Home page with the checklist gone" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">14</span>Generate term invoices</h3>
      <p>Invoices &rarr; Generate invoices: creates an invoice for every active student who doesn't have one
        yet for the chosen term, using each student's own fee category and currency. Safe to run again later -
        existing invoices are left alone.</p>
      <a href="assets/setup/14-generate-invoices.jpg" target="_blank"><img src="assets/setup/14-generate-invoices.jpg" alt="Generate term invoices form" loading="lazy"></a>
    </div>

    <div class="stage">
      <h3><span class="n">15</span>Done - ready to take payments</h3>
      <p>"Created 1 invoice(s) for 2026 Term 3." The school is now fully set up: Take a payment, Invoices and
        every report are ready to use.</p>
      <a href="assets/setup/15-invoices-created.jpg" target="_blank"><img src="assets/setup/15-invoices-created.jpg" alt="Confirmation that invoices were created" loading="lazy"></a>
    </div>`,
    tags: "setup walkthrough from scratch getting started checklist new school tutorial step by step screenshots",
  },

  {
    id: "currency-usd-to-blended",
    category: "Step-by-step setup",
    q: "How do I change from USD-only to Blended currency?",
    a: `<p>Blended mode lets a payment taken at the till in a different currency be converted into the invoice's
      own currency using an exchange rate - useful once a school starts taking more than one currency day to
      day. It can be switched on (or back off) at any time; payments already recorded are never rewritten.</p>
    <ol>
      <li>Add the second currency first: <b>Setup &rarr; Currencies</b> - add a row for it (code, name,
        symbol). A currency already in use (a student, fee structure, payment...) can never be deleted, only
        added.</li>
      <li>Turn on Blended mode: open the <b>School details</b> page, click <b>Currency mode</b> (or, from the
        Home dashboard, the <b>Change</b> button next to the currency mode shown there), choose
        <b>Blended</b>, and save.</li>
      <li>Keep exchange rates current: <b>Setup &rarr; Exchange rates</b> - add a row whenever the rate
        changes, however you source it. A payment uses the latest rate on or before its own date, but the
        cashier can always type over it at the till.</li>
    </ol>
    <p>One thing Blended mode does <b>not</b> do: amounts in different currencies are still never added
      together anywhere - a fund's balance, a report's total and a debtor's balance are always a figure in one
      currency at a time. Blended only affects what happens when a payment itself is taken in a different
      currency from its invoice.</p>`,
    tags: "currency mode blended strict USD ZiG ZWG exchange rate convert multiple currencies till payment",
  },

  {
    id: "monthly-instalments",
    category: "Step-by-step setup",
    q: "How do I use the Monthly instalments feature?",
    a: `<p>A payment can always be put towards an invoice, and the balance always shows on the Debtors report -
      this feature is for a school that specifically wants to track whether parents are keeping up with a
      month-by-month payment schedule through the term, not just whether the invoice is fully paid by the end.</p>
    <ol>
      <li>Turn it on: <b>School details</b> &rarr; set <b>Parents pay</b> to <b>In monthly instalments</b>
        (the default is the whole term's fees due at the start of the term).</li>
      <li>Make sure each term has its <b>opening and closing dates</b> set (<b>Setup &rarr; Terms and
        months</b>) - the schedule is worked out from those dates.</li>
    </ol>
    <p>From then on, for any invoice billed to a term with instalments on, the system splits the fees into one
      instalment a month - the first due when the term opens, then the 1st of each following month that starts
      before the term closes - each an equal share (rounded up to the cent, never more than the total fees).
      Paying ahead of schedule is always fine.</p>
    <p>Where it shows up:</p>
    <ul>
      <li>The <b>Debtors report</b> gains <i>Due by now</i> and <i>Behind</i> columns, an <i>As at</i> date
        (today by default), and an <i>Only those behind schedule</i> filter - the downloads carry the same
        columns.</li>
      <li>A student's own <b>page</b> shows the same two columns against each invoice.</li>
      <li>The printed <b>invoice</b> has an <i>Instalment plan</i> table: each due date, what should have been
        paid by then, and where the student actually stands.</li>
      <li><b>Home</b> shows how many students are behind as at today, with a link straight to them.</li>
    </ul>
    <p>It has no effect when fees are billed each month (a month is already one payment), and nothing changes
      for a school that keeps the default whole-term-at-the-start plan.</p>`,
    tags: "monthly instalments payment plan behind schedule due by now debtors report parents pay term",
  },

  // ---------- Fees & payments ----------
  {
    id: "billing-monthly-vs-termly",
    category: "Fees & payments",
    q: "Can we bill fees every month instead of every term?",
    a: `<p>Most schools bill each term. A school that charges fees monthly instead chooses <b>Fees are billed:
      each month</b> on the first-run page, or later under <b>School details</b>. From then on a billing
      period is a month (January to December) instead of a term, and every screen, invoice, receipt, report
      and export says "month" - everything else works exactly the same, since invoices, fee structures and
      reports all hang off whichever kind of period is in use.</p>
    <ul>
      <li><b>Setup &rarr; Terms and months &rarr; Add a whole year at once</b> creates January to December (or
        Terms 1 to 3) in one step, with each month's dates filled in automatically - tick <b>Is current</b> on
        the one you're in.</li>
      <li><b>Setup &rarr; Fee structures &rarr; Copy fees to other terms or months</b>: set the fees for one
        month, then copy every fee structure (category, currency, amount) to the rest with <i>Tick all</i>.
        Anything already set for a month is left as it is.</li>
      <li><b>Invoices &rarr; Generate month invoices</b> each month instead of each term. A month's invoice
        reference reads like <code>2027M01</code>, a term's like <code>2026T3</code>.</li>
    </ul>
    <p>Changing the setting later never renames or touches existing periods or invoices - each one keeps the
      kind it was made with. This is separate from <b>Month end</b> (closing a calendar month's books so
      nothing can be back-dated into it), which works the same way for every school either way.</p>`,
    tags: "monthly billing term billing period each month fee structure generate month invoices",
  },

  {
    id: "multi-currency-setup",
    category: "Fees & payments",
    q: "How do I set up more than one currency?",
    a: `<p>Most schools only ever need the one currency already set up. A school that takes more than one (for
      example USD and ZiG) adds a row per currency under <b>Setup &rarr; Currencies</b> - a code, a symbol,
      and which one is the default.</p>
    <p>From there:</p>
    <ul>
      <li>Every <b>fee structure</b> has to be set up per currency - a "Day Scholar / 2026 Term 3 / USD"
        structure and a separate "... / ZiG" structure, each with its own amounts.</li>
      <li>Every <b>student</b> has a "bill in" currency, which decides which fee structure invoices them.</li>
    </ul>
    <p>Once a second currency exists, <b>Currency mode</b> (top menu, or the Home page's <i>Change</i> button)
      decides what happens when a payment doesn't match its invoice's currency - see the separate question on
      switching to Blended mode for that part. Receipt books are shared across every currency.</p>`,
    tags: "multiple currencies setup USD ZiG ZWG bill in currency fee structure per currency",
  },

  {
    id: "convert-currency-balances",
    category: "Fees & payments",
    q: "How do I convert old balances to a new currency?",
    a: `<p><b>Admin &rarr; Convert currency</b> (shows up once a second currency exists) is for a currency
      forced on the school from outside - a new Statutory Instrument, say - not something to reach for
      casually.</p>
    <ol>
      <li>It closes out every open invoice in one currency, writing off the balance still owing at a rate you
        set, and lists what it did under <b>Currency conversions</b>.</li>
      <li>Nothing is billed automatically from that alone - <b>Post to Debtors</b> on that report raises each
        converted figure as a real invoice, in its new currency, under whichever term you choose, and switches
        the student's own currency too, so later terms bill them in it without this having to be repeated.</li>
    </ol>
    <p>A conversion run earlier - even on an older version of Wese~Kwese - can still be posted the same way.</p>`,
    tags: "convert currency old balances statutory instrument redenomination write off post to debtors",
  },

  {
    id: "opening-balances",
    category: "Fees & payments",
    q: "How do I bring in students who already owe fees from before we started using Wese~Kwese?",
    a: `<p>This is for a school starting on Wese~Kwese with pupils who already owe, or have already paid some
      of, fees from a term that existed before the system did.</p>
    <ol>
      <li>Recreate that term and its real fee structure: <b>Setup &rarr; Terms and months</b>, then
        <b>Setup &rarr; Fee structures</b>.</li>
      <li><b>Invoices &rarr; Generate invoices</b> for it as usual, so every active student is billed the
        amount they were really charged - tick one or more classes to bill only those, or leave every box
        unticked for everyone.</li>
      <li><b>Invoices &rarr; Opening balances</b> then downloads a sheet listing everyone who owes something
        for that term. Type in what each one has already paid (a blank row means nothing has been paid - the
        invoice is left exactly as it is) and upload it back.</li>
    </ol>
    <p>Every row is checked and shown to you before anything is saved; each one becomes an ordinary payment
      with its own receipt number, exactly as if it had been taken at the till, so it counts towards that
      term's fund totals too. Safe to upload a corrected sheet again - a row already fully paid off is simply
      left out, with the reason shown. If a student number doesn't match anyone (a typo, or a leading zero
      Excel dropped), Wese~Kwese suggests who it probably was by name.</p>`,
    tags: "opening balances pre-existing debt starting out migrating from before already paid",
  },

  {
    id: "sundry-charges",
    category: "Fees & payments",
    q: "How do I charge a student for a uniform, a trip, or a fine?",
    a: `<p>On a student's invoice, <b>Charge</b> bills them for something other than the term's usual fees - a
      uniform sale, a trip, a fine - by adding it to what they owe, straight onto the same invoice. It's
      collected, reported and voided exactly like an ordinary fee: no second ledger to reconcile, and the
      Debtors report, student statements and exports already show it with no extra step.</p>
    <ul>
      <li>For something <b>sold and paid for on the spot</b>, choose a payment method and press
        <b>Charge and collect payment</b> instead - the whole payment goes straight into that item's own fund
        immediately.</li>
      <li>If the charge was made earlier and someone is only <b>paying it off now</b>, <b>Take a payment</b>'s
        <b>Earmark to</b> choice does the same thing on an ordinary payment - leave it as "Spread across all
        fees" for a normal payment, or pick the specific fund the cash is actually for.</li>
    </ul>
    <p>(An ordinary payment always splits proportionally across every fee item still owed on an invoice, by
      design - useful to know if a receipt for a mixed payment looks like it only put a sliver towards a
      particular item: over the life of the invoice the fund total still ends up correct, it just arrives
      gradually rather than in one lump sum.)</p>
    <p><b>Setup &rarr; Fee items</b> and <b>Setup &rarr; Sundry items</b> hold the catalog: a sundry item (for
      example "Skirt") always feeds into one fund/fee item (for example "Uniforms") - several items can share
      one fund (every uniform sub-item typically does), or each get their own (a one-off trip usually does). A
      fine needs a reason every time; nothing else does. <b>Sundry charges</b> lists every charge made, and an
      Admin can void one to put the invoice back exactly as it was. Only Admins can charge, same reasoning as
      reducing fees: the person collecting money cannot also decide what is owed.</p>`,
    tags: "sundry charges uniforms trips fines charge and collect earmark to fee items sundry items",
  },

  {
    id: "adjust-fees",
    category: "Fees & payments",
    q: "How do I reduce what a student owes - a bursary, part-term fee, or write-off?",
    a: `<p>On an invoice, <b>Adjust fees</b> (Admin only) reduces what a student owes: a part-term fee for
      someone who left early, a bursary, a discount, a correction, or a debt written off.</p>
    <ul>
      <li>It can never be more than what is still owing.</li>
      <li>It comes off each fee item in proportion, so later payments still split across the funds correctly.</li>
      <li>It's recorded with who, when and why - the invoice is never edited silently.</li>
    </ul>
    <p><b>Fee adjustments</b> lists every reduction, and an Admin can void one to put the fees back exactly as
      they were. Money already received is never touched, and a student who has paid more than the reduced fee
      would need a refund, which isn't handled. For a student who left part-way through a term whose dates are
      set, the student's page suggests the fee for the time actually attended. Only Admins can reduce fees, so
      the person collecting money cannot also write debts off.</p>`,
    tags: "adjust fees bursary discount write off part term reduce balance fee adjustments",
  },

  {
    id: "expenditure-other-income",
    category: "Fees & payments",
    q: "How do funds work for spending money - expenditure and other income?",
    a: `<p>Every fee item is a <b>fund</b>: money received for it, less money spent from it. You can only spend
      what the fund holds, to the cent - the Expenditure page and the "Spend from fund" list show each fund's
      available balance, and an over-spend is refused with a message saying how much is actually available.
      Voiding expenditure puts the money back; voiding a <i>receipt</i> whose money has already been spent is
      refused until that expenditure is voided first, so a fund can never go below zero.</p>
    <p><b>Other income can be spent too.</b> Each other-income category (uniform sales, tuck shop, broilers...)
      is a fund of its own - what was received in it, less what was spent from it, in each currency separately.
      It appears in the <i>Spend from fund</i> list, under <b>Other income funds</b>, only while it holds
      money (once spent, it drops off the list; its history stays). The same rule applies: you can only spend
      what it holds, and income already spent can't be voided until that expenditure is voided first. The
      <b>Funds report</b> lists other-income funds below the fee funds, with opening, income, expenditure and
      closing.</p>
    <p>On <b>Record other income</b>, pick a category from the dropdown; if it isn't there, press
      <b>Add other income category</b> right on the page - nothing you've already typed is lost. An Admin can
      rename a category or switch it off under <b>Setup &rarr; Other income categories</b>; categories with
      entries can be switched off but never deleted.</p>`,
    tags: "expenditure other income fund balance spend from fund overspend uniform sales tuck shop",
  },

  {
    id: "month-end-closing",
    category: "Fees & payments",
    q: "How do I close a month so nothing can be back-dated into it?",
    a: `<p>Under <b>Periods</b> (Bursar or Admin), pick a year and close any calendar month - once closed, no
      payment, invoice, expenditure, other income or adjustment can be dated into it any more, so the books for
      that month stop moving once everyone agrees they're final.</p>
    <ul>
      <li>A <b>Bursar</b> can close a month.</li>
      <li>Only an <b>Admin</b> can reopen one that's already closed.</li>
    </ul>
    <p>This is separate from the <i>billing period</i> setting (whether the school bills each term or each
      month) - Month end works the same way for every school either way, closing a calendar month's books
      regardless of how fees themselves are billed.</p>`,
    tags: "month end close period lock back dated reopen closed books",
  },

  {
    id: "single-student-invoice",
    category: "Fees & payments",
    q: "How do I create an invoice for one student who missed the usual Generate invoices run?",
    a: `<p>On that student's own <b>Take a payment</b> page, choosing a term and creating an invoice for it
      there raises just that one student's invoice for that term, from their fee category and currency's
      usual fee structure - without having to re-run <b>Invoices &rarr; Generate invoices</b> for everyone.</p>
    <p>Useful for a pupil who joined after the main invoice run, or who needs billing for a term that was
      skipped. If that student already has an invoice for the term in their currency, nothing new is created -
      the existing one is used. It needs a matching fee structure (category, term, currency) to already be set
      up under <b>Setup &rarr; Fee structures</b>, same as the bulk run does.</p>`,
    tags: "single invoice one student create invoice late joiner missed generate invoices",
  },

  {
    id: "void-a-payment",
    category: "Fees & payments",
    q: "How do I void a payment I entered by mistake?",
    a: `<p>Open the payment from the <b>Payments</b> list (or the receipt itself) and choose <b>Void</b> -
      you'll be asked for a reason, which is kept permanently alongside the record. Nothing is ever deleted:
      the original payment stays visible, just marked void, and the amount comes back off the invoice and out
      of the fund(s) it was allocated to.</p>
    <p>A couple of things can stop a void: voiding a payment whose money has already been spent from its fund
      is refused until that expenditure is voided first (so a fund can never go below zero), and a payment
      dated into an already-closed month can't be voided without reopening that month first (Admin only).</p>`,
    tags: "void payment mistake undo receipt cancel reverse",
  },

  {
    id: "copy-fee-structures",
    category: "Fees & payments",
    q: "How do I copy fees from one term to another instead of retyping them?",
    a: `<p><b>Setup &rarr; Fee structures &rarr; Copy fees to other terms or months</b>: pick a source term (or
      month) that already has its fees set up, tick the term(s) or month(s) to copy them to (<i>Tick all</i>
      works too), and every fee structure - each category and currency, with all its amounts - is copied
      across in one go.</p>
    <p>Anything already set up for a destination period is left exactly as it is, so this is safe to run more
      than once or on a period that's only partly set up - it only fills in what's missing.</p>`,
    tags: "copy fees fee structures new term retype duplicate setup",
  },

  {
    id: "downloads-pdf-word-excel-csv",
    category: "Fees & payments",
    q: "How do I get a printable or downloadable copy of a receipt, invoice or report?",
    a: `<p>Every list and report (payments, invoices, debtors, daily cash, funds, expenditure, other income,
      students, class lists, timetable), and a single receipt, invoice or student statement, has a
      <b>Download</b> button - it opens a small menu instead of cluttering the page with one button per
      format:</p>
    <ul>
      <li><b>PDF</b> and <b>Word</b> - available everywhere, including a single receipt or invoice.</li>
      <li><b>Excel</b> and <b>CSV</b> - available on lists and reports (amounts come through as real numbers,
        with totals rows).</li>
    </ul>
    <p>There's also a plain <b>Print</b> button on most pages, for printing straight from the browser without
      downloading anything first. Every download starts with the school's own name and contact details, the
      title, and who printed it and when - and it's all produced on the server PC itself, nothing goes to any
      online service.</p>`,
    tags: "download pdf word excel csv print export report receipt invoice",
  },

  {
    id: "daily-cash-report",
    category: "Fees & payments",
    q: "How do I see how much cash came in on a given day, by payment method or by cashier?",
    a: `<p><b>Daily cash</b> (one of the tabs alongside Debtors, Funds, Payments, Expenditure and Other income)
      totals every receipt over a date range - a single day, or From/To for a longer stretch.</p>
    <ul>
      <li>A total, split into <b>Mobile money</b> versus <b>Cash / bank / other</b>.</li>
      <li>A breakdown <b>by method</b> (cash, bank, Ecocash, Telecash...) and a breakdown <b>by cashier</b> -
        who received how much.</li>
      <li>The full list of receipts for the period, each linking straight to its receipt.</li>
    </ul>
    <p>Useful for reconciling the physical cash drawer or a mobile money wallet against what the system says
      was taken on a given day. Has the same Print and Download (PDF/Word/Excel/CSV) options as every other
      report.</p>`,
    tags: "daily cash cashbook report by method by cashier reconcile mobile money ecocash telecash",
  },

  // ---------- Students & classes ----------
  {
    id: "bulk-register-students",
    category: "Students & classes",
    q: "How do I register a whole school of students at once?",
    a: `<p>Typing a whole school in one by one is slow, especially with only one laptop and no network.
      <b>Students &rarr; Import from sheets</b> (Admin or Bursar) gives each teacher a registration sheet and
      reads the results back in.</p>
    <ol>
      <li>Choose <i>All classes</i> and download the zip: one Excel file per class, with the class already
        filled in, drop-down lists (gender, class, fee category, currency) built from the school's own setup,
        and a "How to fill this in" tab.</li>
      <li>Teachers fill in one pupil per row. Only surname, first name, gender and class are required; the rest
        (date of birth, address, parents, phones, doctor, emergency contact, notes) is optional.</li>
      <li>Upload the returned files (several at once, <code>.xlsx</code> or <code>.csv</code>). Every row is
        checked and a <b>preview</b> shows what will be added by class, rows with problems (with Excel's own
        row numbers and the reason), and pupils already in the system. Nothing is saved until confirmed.</li>
      <li>On confirming, student numbers are handed out class by class (in Setup &rarr; Classes order),
        alphabetically, continuing after the highest number already used. Rows with problems are left out - fix
        them and upload the sheet again; pupils already added (same name and date of birth, or same name and
        class when a date is missing) are recognised and never added twice.</li>
    </ol>
    <p>A sheet the school already has can be uploaded too - columns are found by heading in any order, extra
      columns are ignored, and a class/fee category/currency can be chosen for every row that doesn't say. A
      typed-in class name is matched loosely (spelled-out numbers, abbreviations, punctuation differences); a
      genuine misspelling gets a "Did you mean...?" suggestion right there in the preview. Files are read on
      the server PC only - nothing is sent online.</p>`,
    tags: "bulk register students excel import sheets registration spreadsheet teachers upload",
  },

  {
    id: "students-who-leave",
    category: "Students & classes",
    q: "A student is leaving - how do I record that?",
    a: `<p>Nobody is ever deleted - a student's receipts and invoices have to be kept. Open the student and
      press <b>Record leaving</b>, then choose the reason (transferred, completed school, withdrawn, stopped
      attending, expelled, passed away, entered by mistake or a duplicate, other), the date, and where they
      went.</p>
    <p>The student then drops out of class lists, new invoices and the active count, but stays on record.
      Anything they still owe stays on the <b>Debtors</b> report (marked with the reason) and can still be
      paid. The <b>student statement</b> (PDF or Word) shows the leaving details and whether fees are cleared -
      what a receiving school usually asks for.</p>
    <p><b>Bring back</b> reverses it. At the end of the year, <b>Class list &rarr; Class completed school</b>
      marks a whole class as completed in one step. A student entered by mistake can be removed outright by an
      Admin, but only while there are no invoices or payments for them. Status can't be changed by editing a
      student's details any more - every change goes through these steps and is written to the Activity log.</p>`,
    tags: "student leaving withdrawn transferred record leaving bring back class completed school",
  },

  {
    id: "end-of-year-promotion",
    category: "Students & classes",
    q: "How do I promote every class to the next grade at the end of the year?",
    a: `<p><b>Students &rarr; End-of-year promotion</b> moves every class up in one go: each class gets a
      suggested destination (the next class in the Sort order under <b>Setup &rarr; Classes</b>, or "finishes
      school" for the last one), you tick any repeaters, review the whole plan, and confirm.</p>
    <p>Students keep their fee history, and past invoices keep the class they were actually billed in at the
      time. The latest promotion can be undone; anyone changed since is left as they are.</p>`,
    tags: "end of year promotion next class grade repeaters class list sort order",
  },

  {
    id: "old-records-erasure",
    category: "Students & classes",
    q: "How long are former students' personal details kept, and can they be erased sooner?",
    a: `<p><b>Students &rarr; Old records</b> (Admin only) sets how long a former student's personal details are
      kept - 7 years after they left by default. Past that, and only once the student owes nothing (paid or
      written off), an Admin can erase their name, birth date, address, parents, phone, doctor and notes.</p>
    <p>The student becomes "Former Student" with the same student number, so receipts and reports still add
      up correctly. A single former student can also be erased earlier on request. Erasing cannot be undone,
      and older backups made before the erasure still hold the details.</p>`,
    tags: "old records retention erase personal data former student privacy data protection",
  },

  {
    id: "timetable",
    category: "Students & classes",
    q: "How does the Timetable feature work?",
    a: `<p>First, under <b>Setup</b> (Admin only), add the <b>Subjects</b>, <b>Teachers</b> and <b>Time
      slots</b> this school uses - each teacher's name, each subject, and the slots in a day (with start and
      end times if you want them shown). <b>Timetable</b> in the top menu then shows a weekly grid: pick a
      class to see its lessons subject by subject, or a teacher to see every class they teach across the week
      in one place.</p>
    <ul>
      <li>A <b>Rows</b> switch flips the grid between one row per period (the usual layout) and one row per
        day - the choice carries through to Print and every download.</li>
      <li><b>Admin</b> builds and edits the grid (add, change or clear a lesson); everyone else can view and
        print it, same as a class list.</li>
      <li>The system <b>won't allow a clash</b>: the same teacher can't be booked into two classes in the same
        slot, and a class can't get two lessons in the same slot.</li>
      <li><b>Copy to a new term</b> (Admin) copies a class's whole grid into an empty term instead of rebuilding
        it from scratch.</li>
    </ul>
    <p>Downloads as PDF, Word, Excel or CSV, same as every other list in the system.</p>`,
    tags: "timetable subjects teachers time slots weekly grid lessons schedule clash",
  },

  {
    id: "bulk-import-classes",
    category: "Students & classes",
    q: "How do I set up my classes in bulk instead of adding them one by one?",
    a: `<p><b>Setup &rarr; Classes &rarr; Import</b> adds many classes at once from a filled-in sheet, instead of
      typing them in one at a time - handy for setting classes up for the first time, in the standard order
      (Grade 1-7 or Form 1-6, whichever the school uses). Download the sheet, fill in the class names, and
      upload it back.</p>
    <p>A class name already in the system is left as it is and simply skipped, so it's safe to run the import
      again later if a few more classes need adding - only the new ones get created.</p>`,
    tags: "bulk import classes setup spreadsheet grade form hierarchy",
  },

  {
    id: "printable-class-list",
    category: "Students & classes",
    q: "How do I print a class register or attendance sheet?",
    a: `<p><b>Class list</b> (top menu) lets you choose one class, or <i>Every class (one per page)</i>, and
      print it - the school's name is printed at the top of every page. A <b>Students</b> filter picks which
      statuses to include (active only, by default, or everyone).</p>
    <p>An <b>Empty columns</b> option adds blank columns alongside each student's name for marking things by
      hand - choose a specific number, or <b>Register (31 days)</b> for a ready-made daily attendance sheet for
      the month. Each class's list ends with a total and a boy/girl breakdown. It also has the same
      Download (PDF/Word/Excel/CSV) menu as everything else.</p>`,
    tags: "class list print register attendance sheet blank columns marks roll",
  },

  // ---------- Installing ----------
  {
    id: "install-basic",
    category: "Installing",
    q: "How do I install Wese~Kwese?",
    a: `Run <code>WeseKwese-Setup-&lt;version&gt;.exe</code> on the office PC that will act as the server
      (it needs administrator permission). No Python or other software is needed - everything is inside the
      installer. The wizard asks for the port (8000 is fine unless something else uses it), time zone,
      a backup folder (ideally one your cloud-sync app watches), the database (built-in SQLite is fine for one
      school), and a few options (desktop shortcut, allow other PCs through the firewall, daily backup at 17:00).
      <br><br>When it finishes, your browser opens on the <b>first-run page</b> - create the first Admin account
      there. This only works on the server PC itself. Other PCs then open
      <code>http://&lt;server-PC-name&gt;:8000/</code>.`,
    tags: "setup wizard new install first run",
  },
  {
    id: "install-requirements",
    category: "Installing",
    q: "What are the minimum PC / server requirements?",
    a: `There's no specialised server hardware needed - Wese~Kwese is a lightweight app. As a practical guide:
      <ul>
        <li><b>OS:</b> Windows 10/11, 64-bit (an ordinary desktop PC - no server edition needed)</li>
        <li><b>Processor:</b> dual-core minimum (quad-core is more comfortable)</li>
        <li><b>RAM:</b> 4 GB minimum, 8 GB comfortable</li>
        <li><b>Storage:</b> 10 GB free minimum, 20 GB+ comfortable (SSD preferred)</li>
        <li><b>Network:</b> one Ethernet or Wi-Fi connection to the school's LAN</li>
      </ul>
      Officially <b>Windows only</b> - the installer and its backup/firewall/remote-access tooling are all
      Windows-specific. Other PCs on the network just need an ordinary web browser; nothing is installed on them.`,
    tags: "hardware specs minimum server pc requirements ram processor storage",
  },
  {
    id: "install-unknown-publisher",
    category: "Installing",
    q: "Why does Windows say \u201cUnknown publisher\u201d when I run the installer?",
    a: `This is expected - the installer isn't code-signed (that needs a paid certificate). Choose
      <b>More info \u2192 Run anyway</b>. It doesn't mean anything is wrong with the installer.`,
    tags: "smartscreen warning security blocked windows defender",
  },
  {
    id: "install-postgresql",
    category: "Installing",
    q: "Can I use PostgreSQL instead of the built-in database?",
    a: `Yes. Install PostgreSQL 14+ from postgresql.org, open <i>SQL Shell (psql)</i> and run:
      <pre>CREATE USER schoolfees WITH PASSWORD 'choose-a-strong-password';
CREATE DATABASE schoolfees OWNER schoolfees;</pre>
      Then choose PostgreSQL in the installer wizard and enter those details - it tests the connection before
      continuing. The built-in SQLite option needs no separate setup at all and is fine for one school.`,
    tags: "database postgres sql server engine",
  },
  {
    id: "install-silent",
    category: "Installing",
    q: "Can I install it silently, without the setup wizard?",
    a: `Yes, for a scripted/unattended install:
      <pre>WeseKwese-Setup-&lt;version&gt;.exe /VERYSILENT /SUPPRESSMSGBOXES /PORT=8000 /DB=sqlite ^
    /TIMEZONE=Africa/Harare /BACKUPDIR="D:\\MEGA\\fees-backups" /TASKS="desktopicon,firewall,dailybackup"</pre>
      For PostgreSQL add <code>/DB=postgres /PGHOST=localhost /PGPORT=5432 /PGNAME=schoolfees
      /PGUSER=schoolfees /PGPASSWORD=...</code>. <code>/DATADIR=</code> moves the data folder, and
      <code>/CURRENTUSER</code> does a per-user install with no services or firewall (useful for testing).`,
    tags: "scripted unattended command line deploy multiple schools",
  },
  {
    id: "install-upgrade",
    category: "Installing",
    q: "How do I upgrade to a newer version?",
    a: `Just run the newer <code>Setup.exe</code> over the top. It detects the existing install and shows a
      page confirming your port, time zone, backup folder and database settings will be kept unchanged -
      the setup questions are skipped entirely. Your data is kept, and a backup is taken automatically first.`,
    tags: "update new version reinstall",
  },
  {
    id: "install-uninstall",
    category: "Installing",
    q: "How do I uninstall Wese~Kwese?",
    a: `Through Windows <b>Settings \u2192 Apps</b>. It asks whether to delete the data too - the default is to
      <b>keep</b> it, so uninstalling by mistake doesn't lose anything.`,
    tags: "remove delete app",
  },
  {
    id: "install-what-it-sets-up",
    category: "Installing",
    q: "What does the installer actually set up on my PC?",
    a: `<ul>
      <li>Program files in <code>C:\\Program Files\\SchoolFees</code> (replaced on upgrade)</li>
      <li>Data in <code>C:\\ProgramData\\SchoolFees</code>: settings, database, backups, logs
        (admin-only folder; <b>upgrades never touch it</b>)</li>
      <li>A scheduled task <b>SchoolFees Server</b> that starts at boot and restarts the server if it stops</li>
      <li>A scheduled task <b>SchoolFees Backup</b> (daily 17:00, keeps the newest 30), if you ticked it</li>
      <li>A Windows Firewall rule limited to the local subnet, if you ticked it</li>
      <li>Start Menu shortcuts for backup, restart, importing old data, restoring a backup, resetting a
        password, and uninstalling</li>
    </ul>`,
    tags: "program files data folder scheduled task firewall start menu shortcuts",
  },

  {
    id: "receipt-books",
    category: "Installing",
    q: "Can I use a separate receipt book for each payment method?",
    a: `<p>Yes - under <b>Setup &rarr; Receipt books</b>, each book has a number range (the last number must be
      higher than the first; <i>next number</i> can be left blank to start at the first, otherwise it must lie
      inside the range) and, optionally, a <b>payment method</b>.</p>
    <p>Leave the method blank for a book used for every kind of payment - the usual setup: one receipt book,
      with cash, bank, Ecocash and Telecash all sharing it. If this school instead keeps a separate paper
      receipt book for each method, give each book its own method and its own number range - a payment then
      always draws its number from the book for its method, falling back to a blank book if there is one.
      Number ranges can never overlap, whatever method the books are for, so a receipt number always identifies
      exactly one payment on screen, in exports, and on the Debtors and Cashbook reports. The Home page warns
      if a payment method has no active book to draw from.</p>`,
    tags: "receipt books number range payment method cash bank ecocash telecash",
  },

  {
    id: "import-access-howto",
    category: "Installing",
    q: "How do I bring over our old Access data?",
    a: `<p><b>Start Menu &rarr; Import old Access data into Wese~Kwese</b> (needs the free
      <b>Microsoft Access Database Engine, 64-bit</b>, and only works while the system is still empty). It does
      a practice run first, shows any warnings, and only actually imports once you type <b>YES</b>.</p>
    <p>Each imported user gets a <b>temporary password printed once</b> - write them down. It also checks its
      totals against the old <code>Income</code> and <code>CurrentAcc</code> tables and prints any difference,
      so you can see at a glance whether the import matches the old system. The old Access database has no idea
      of multiple currencies, so everything comes in under the school's one default currency - add more
      currencies under <b>Setup &rarr; Currencies</b> afterwards if needed.</p>`,
    tags: "import access data accdb old database migration access database engine",
  },

  // ---------- Networking & remote access ----------
  {
    id: "net-internet-needed",
    category: "Networking & remote access",
    q: "Do I need an internet connection to use Wese~Kwese?",
    a: `No - it runs entirely on your local network, with no internet connection required for day-to-day use.
      The <b>only</b> thing that needs internet is e-mailing a backup copy, if you've turned that on.`,
    tags: "offline internet required no connection",
  },
  {
    id: "net-other-pcs",
    category: "Networking & remote access",
    q: "How do other PCs in the office connect?",
    a: `Tick \u201callow other school PCs through the firewall\u201d when installing, or run
      <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cAllow other PCs to connect to Wese~Kwese\u201d</b> afterwards
      at any time. This opens the firewall for the local network only - nothing reaches it from outside the
      building. Other PCs then just open <code>http://&lt;server-PC-name&gt;:&lt;port&gt;/</code> in a browser.
      A cheap Wi-Fi router (or, failing that, a phone hotspot) is all that's needed to connect the PCs together -
      it doesn't need to reach the internet itself.`,
    tags: "lan connect browser address other computers",
  },
  {
    id: "net-cant-connect",
    category: "Networking & remote access",
    q: "Other PCs can't connect any more - what do I check?",
    a: `This usually means the server PC's network address has changed (a different network, a new router, a
      phone hotspot instead of the usual one). Run
      <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cAllow other PCs to connect to Wese~Kwese\u201d</b> again on the
      server PC - it re-detects the current address and re-opens the firewall for it. Also double-check every PC
      is actually on the same network, and that the address being typed matches the server PC's current name
      and the port chosen at install.`,
    tags: "cant reach connection failed not working address changed",
  },
  {
    id: "net-remote-access",
    category: "Networking & remote access",
    q: "How can I access Wese~Kwese from outside the school building?",
    a: `Install <a href="https://tailscale.com" target="_blank" rel="noopener">Tailscale</a> (free) on the server
      PC and on the phone or PC you want to use remotely, signed into the same account on both. Then run
      <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cAllow remote access to Wese~Kwese (Tailscale)\u201d</b> on the
      server. This opens the firewall for Tailscale's own private network only - never the open internet, and
      never a router port-forward. Local PCs and your remote device can be used at the same time, each with
      their own address.`,
    tags: "remote offsite tailscale vpn outside building phone",
  },
  {
    id: "net-no-port-forward",
    category: "Networking & remote access",
    q: "Should I port-forward my router to reach Wese~Kwese from outside?",
    a: `No - this is not recommended. Wese~Kwese serves plain HTTP for its normal LAN use, which is fine on a
      trusted, closed school network but would expose unencrypted passwords to the open internet if
      port-forwarded. Use <b>Tailscale</b> instead (see above) - it's a private tunnel between your own devices,
      never a port opened to the internet.`,
    tags: "port forward router security risk exposed",
  },
  {
    id: "net-port",
    category: "Networking & remote access",
    q: "What port does the server use?",
    a: `Whatever you chose during install - <code>8000</code> is the suggested default and works unless
      something else on that PC already uses it. Other PCs reach the server at
      <code>http://&lt;server-PC-name&gt;:&lt;port&gt;/</code>.`,
    tags: "port number address url",
  },

  // ---------- Users, sign-in & passwords ----------
  {
    id: "users-first-admin",
    category: "Users, sign-in & passwords",
    q: "How do I create the first Admin account?",
    a: `No command line needed - right after installing, your browser opens on the <b>first-run page</b>, where
      you create the first Admin account. This only works on the server PC itself, and only while no account
      exists yet.`,
    tags: "setup create account first time",
  },
  {
    id: "users-change-own-password",
    category: "Users, sign-in & passwords",
    q: "How do I change my own password?",
    a: `Once signed in, use <b>Change password</b> from the menu. If an Admin just gave you a new or reset
      password, it's only ever temporary - you'll be asked to choose your own the moment you next sign in,
      before you can do anything else.`,
    tags: "change my own password self service new password update",
  },
  {
    id: "users-forgot-password",
    category: "Users, sign-in & passwords",
    q: "I forgot my password - what do I do?",
    a: `Ask an Admin to reset it for you (<b>Users \u2192 Reset password</b>) - there's no e-mail reset, since
      the system runs without internet. A reset password is temporary: you'll choose your own at your next
      sign-in.
      <br><br><b>If the only Admin forgot theirs:</b> on the server PC, open
      <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cReset a forgotten Wese~Kwese password\u201d</b> (Windows asks
      for administrator permission). It lists every username, asks which one, and prints a one-time temporary
      password. This also clears a sign-in lockout. From a Command Prompt, the same tool is
      <code>sf.cmd reset_password --list</code> and <code>sf.cmd reset_password &lt;username&gt;</code>.`,
    tags: "reset password forgotten locked admin",
  },
  {
    id: "users-locked-out",
    category: "Users, sign-in & passwords",
    q: "I'm locked out after too many wrong passwords - now what?",
    a: `5 wrong attempts in a row locks that username for 15 minutes. Either wait it out, or ask an Admin to
      unlock it from the <b>Users</b> page (resetting the password also unlocks it).`,
    tags: "lockout too many attempts failed login",
  },
  {
    id: "users-temp-admin",
    category: "Users, sign-in & passwords",
    q: "How do I give someone temporary Admin rights while the usual Admin is away?",
    a: `On the <b>Users</b> page, open that person's row and grant <b>temporary Admin rights</b> through the
      end of a chosen day, without changing their actual role. It switches off by itself the day after - nothing
      to undo - and can be revoked early at any time. Both granting and revoking are kept in the Activity log,
      and a banner reminds the covering person while it's active.`,
    tags: "cover admin leave vacation temporary access",
  },
  {
    id: "users-auto-signout",
    category: "Users, sign-in & passwords",
    q: "Why was I signed out automatically?",
    a: `Wese~Kwese signs people out after a period of no typing, clicking or touching the screen (3 minutes by
      default, with a 30-second \u201cAre you still there?\u201d warning first). An Admin can change this under
      <b>Users \u2192 Sign-out timing</b> (1-60 minutes). It's enforced by the server too, so closing the
      browser or switching off JavaScript doesn't keep a session open.`,
    tags: "idle timeout logged out session expired",
  },

  {
    id: "user-roles-permissions",
    category: "Users, sign-in & passwords",
    q: "What can a Bursar or General user do, compared to an Admin?",
    a: `<p>There are three roles, each a step up from the last:</p>
    <ul>
      <li><b>General</b> - can see students (no money figures shown anywhere). That's it.</li>
      <li><b>Bursar</b> - everything General can do, plus: add/edit students, take payments, run invoices,
        reports, expenditure and other income, and void a payment or expenditure (needs a reason) or close a
        month.</li>
      <li><b>Admin</b> - everything Bursar can do, plus: reopen a closed month, and reach Setup (terms,
        classes, fees, receipt books), Users, and the Activity log.</li>
    </ul>
    <p>Reducing fees (Adjust fees) and charging sundry items are Admin-only too, on purpose - so the person
      collecting money day to day can't also decide what's owed or write debts off.</p>`,
    tags: "roles permissions admin bursar general what can each role do access level",
  },

  {
    id: "activity-log",
    category: "Users, sign-in & passwords",
    q: "How do I see who did what and when?",
    a: `<p><b>Users &rarr; Activity log</b> (Admin only) lists sign-ins, failed sign-in attempts, payments,
      voids, invoice runs, month-end closes and reopens, and user changes - newest first.</p>
    <p>Filter it by <b>person</b> (username), a <b>date range</b>, or <b>what</b> kind of action, and it shows
      the computer's address each entry came from. Has the same Print and Download (PDF/Word/Excel/CSV) options
      as every other report.</p>`,
    tags: "activity log who did what audit trail history sign ins changes",
  },

  // ---------- Backups & restoring ----------
  {
    id: "backup-how-often",
    category: "Backups & restoring",
    q: "How often are backups made, and where are they stored?",
    a: `A backup is saved automatically every day at 17:00 (the newest 30 are kept), and
      <b>Backups \u2192 Back up now</b> makes one on demand at any time - available to the Bursar too, not just
      Admins. Set the backup folder to one your cloud-sync app (e.g. MEGA, Dropbox, OneDrive) watches, so a copy
      leaves the PC automatically as well.`,
    tags: "automatic daily backup location folder schedule",
  },
  {
    id: "backup-restore",
    category: "Backups & restoring",
    q: "How do I restore a backup?",
    a: `On the server PC: <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cRestore a Wese~Kwese backup\u201d</b> (asks
      for administrator permission). This opens a point-and-click tool in your browser - pick a backup from the
      list, enter its password if it's encrypted, review what's in it next to what's there now, and click once
      to confirm. Nothing changes until you confirm. It checks the backup is genuine and not from a newer
      version, saves a safety copy of your current data first, then swaps it in.
      <br><br>Prefer the command line? <code>sf.cmd restore_backup --list</code>, then
      <code>sf.cmd restore_backup &lt;number-or-path&gt;</code>. (SQLite only - PostgreSQL uses
      <code>pg_restore</code> instead, with the server stopped first.)`,
    tags: "recover restore backup data loss",
  },
  {
    id: "backup-undo-restore",
    category: "Backups & restoring",
    q: "I restored the wrong backup - can I undo it?",
    a: `Yes. Restoring always saves a safety copy of what was there beforehand
      (<code>before-restore-&lt;date&gt;.sqlite3</code>, never overwritten) - it shows up in the restore list
      like any other backup, so just restore that one to put things back.`,
    tags: "undo mistake wrong restore safety copy",
  },
  {
    id: "backup-email-setup",
    category: "Backups & restoring",
    q: "How do I set up e-mailed backup copies?",
    a: `Under <b>Admin \u2192 Backups</b>, fill in the mail server (Gmail, Outlook and Yahoo can be picked from a
      list), the account, its password (Gmail needs an <i>app password</i>, not your normal one), and a
      <b>backup zip password</b> of at least 8 characters. Press Save, then \u201cSend a test e-mail\u201d.
      This needs an internet connection at the moment the backup runs - it's the only part of Wese~Kwese that
      does. Up to 5 recipient addresses can be set.`,
    tags: "email mail backup gmail app password",
  },
  {
    id: "backup-password-lost",
    category: "Backups & restoring",
    q: "I forgot my backup encryption password - can it be recovered?",
    a: `No - <b>write it down and keep it safe before you ever need it</b>. Without the password, a backup made
      while it was set can never be opened again, including by Wese~Kwese's own restore tool - this applies to
      both the e-mailed copies and the only copy on the PC. There is no recovery mechanism; this is by design,
      since the backup holds every student and payment record.`,
    tags: "lost password encrypted zip cannot open recovery",
  },
  {
    id: "backup-email-failed",
    category: "Backups & restoring",
    q: "Why did my backup e-mail fail to send?",
    a: `Common causes: no internet at backup time, a wrong mail password, or the attachment being over the size
      limit. The reason is shown right on the Backups page, and a warning appears on the Admin's home page -
      either way, the backup copy on the PC itself is still made regardless. An optional separate alert address
      can also get a short failure notice (it won't help if the cause is \u201cno internet at all\u201d, since
      sending that alert needs the same connection).`,
    tags: "email failed not sending error backup",
  },

  {
    id: "backup-encryption-setup",
    category: "Backups & restoring",
    q: "How do I encrypt the backups kept on this PC?",
    a: `<p><b>Admin &rarr; Backups &rarr; Backup encryption</b> - separate from the e-mail zip password, so one
      doesn't depend on the other. Set a <b>backup password</b> (at least 8 characters) and every backup from
      then on, the daily one and every manual <i>Back up now</i>, is AES-256 encrypted the moment it's made,
      including anywhere <code>BACKUP_DIR</code> syncs to (for example a cloud-sync folder). An earlier backup
      made before the password was set is not touched.</p>
    <p><b>Write this password down and keep it safe</b>: without it, no backup made while it was set can ever
      be opened again - not just the e-mailed copy, the only copy. Restoring asks for it automatically when the
      backup it's working with needs it. If <code>BACKUP_DIR</code> looks like it syncs to a cloud service
      (MEGA, Dropbox, OneDrive, Google Drive, iCloud) but no backup password is set, a warning shows on the Home
      page, the Backups page, and during installation when choosing the folder.</p>`,
    tags: "backup encryption password AES-256 cloud sync MEGA dropbox onedrive protect",
  },

  // ---------- Troubleshooting ----------
  {
    id: "trouble-server-not-responding",
    category: "Troubleshooting",
    q: "The app won't load / the server isn't responding - what do I check?",
    a: `<ol>
      <li>Confirm the server PC is switched on and not asleep.</li>
      <li>Check you're using the right address and port -
        <code>http://&lt;server-PC-name&gt;:&lt;port&gt;/</code>.</li>
      <li>On the server PC, try <b>Start Menu \u2192 Wese~Kwese \u2192 \u201cRestart the Wese~Kwese
        server\u201d</b> - the server runs as a scheduled task that normally restarts itself if it stops, but
        this forces it.</li>
      <li>If other PCs recently stopped connecting but the server itself is fine, see
        \u201cOther PCs can't connect any more\u201d under Networking.</li>
    </ol>`,
    tags: "down not working crashed server offline cant open",
  },
  {
    id: "trouble-no-invoice-warning",
    category: "Troubleshooting",
    q: "Home says some students have no invoice for this term - what do I do?",
    a: `<p>This shows when one or more active students don't yet have an invoice for the current term (or
      month) - usually because they joined, or had their class or fee category changed, after the last
      <b>Generate invoices</b> run.</p>
    <p>Click through to <b>Generate invoices</b> and run it again - it's always safe to re-run: it only adds
      invoices for students who don't already have one, and never touches or duplicates an invoice that
      already exists. If you'd rather not touch anyone else, create a single invoice for just that one student
      instead, from their own <b>Take a payment</b> page. Either way, it needs a matching fee structure
      (category, term, currency) to already exist under <b>Setup &rarr; Fee structures</b> - if one doesn't,
      that student is listed as a problem rather than invoiced.</p>`,
    tags: "no invoice warning home dashboard missing invoice generate invoices",
  },
  {
    id: "trouble-no-receipt-numbers",
    category: "Troubleshooting",
    q: "\u201cNo receipt numbers left\u201d when taking a payment",
    a: `The current receipt book has run out of numbers. Ask an Admin to add a new receipt book under
      <b>Setup \u2192 Receipt books</b> - either one book for everything, or a separate book per payment method,
      whichever the school prefers.`,
    tags: "receipt book out of numbers error payment",
  },
  {
    id: "trouble-growth-paused",
    category: "Troubleshooting",
    q: "Adding a student / taking a payment / generating invoices is \u201cpaused\u201d",
    a: `This is the free-trial or licensing limit, not a fault. A new install runs free up to 30 active
      students; a bigger school gets a 3-month grace period before growth actions (adding a student, taking a
      payment, generating invoices) pause - viewing, editing, reports, exports and backups keep working the
      whole time, and nothing already entered is ever hidden. Check <b>School details \u2192 License</b> for
      what's active, and contact the Wese~Kwese team for a license key sized to the school.`,
    tags: "license limit blocked trial expired growth paused",
  },
  {
    id: "trouble-cant-delete-item",
    category: "Troubleshooting",
    q: "I can't delete a fee structure, fee item or currency",
    a: `This is deliberate: once something has actually been used to bill or record money (a fee structure
      already invoiced, a currency already used), it can only be deactivated, not deleted - this protects the
      historical record of what was really charged. Something that was never actually used can still be
      removed normally.`,
    tags: "delete disabled cannot remove fee structure currency",
  },
  {
    id: "trouble-access-import",
    category: "Troubleshooting",
    q: "Importing the old Access data isn't working",
    a: `This needs the free <b>Microsoft Access Database Engine, 64-bit</b> installed first, and only works
      while Wese~Kwese is still completely empty (no students, invoices or payments entered yet). Use
      <b>Start Menu \u2192 \u201cImport old Access data into Wese~Kwese\u201d</b> - it does a practice run first
      and shows any warnings, and only actually imports once you type YES to confirm. It also checks its totals
      against the old database's own income figures and reports any difference, so a mismatch is visible
      immediately rather than discovered later.`,
    tags: "access database accdb migrate old data import error",
  },
  {
    id: "trouble-overpayment",
    category: "Troubleshooting",
    q: "A payment is refused as too large (overpayment)",
    a: `Wese~Kwese never allows a payment bigger than what's actually still owing on that invoice - this is a
      deliberate safeguard, not a bug. Check the real balance owing first; if the family genuinely wants to pay
      ahead for a future term, create (or generate) that term's invoice first, then take the payment against it.`,
    tags: "overpayment too much rejected balance",
  },
  {
    id: "trouble-first-run-wrong-pc",
    category: "Troubleshooting",
    q: "It says setup can only be finished on the server PC - what do I do?",
    a: `<p>This shows when the very first Admin account hasn't been created yet, and someone tries to do it from
      a PC other than the one Wese~Kwese is installed on. It's deliberate: if any PC on the network could claim
      the first Admin account, a stranger on the same Wi-Fi could grab it before the school does.</p>
    <p>Go to the <b>server PC itself</b> - the one the installer actually ran on - and open
      <code>http://localhost:8000/setup/</code> there (or whatever port was chosen during install) to create
      the first Admin account. Once that's done, every other PC on the network can sign in normally from the
      ordinary address.</p>`,
    tags: "first run setup server pc only localhost cannot create admin stranger network",
  },

  // ---------- Licensing & upgrades ----------
  {
    id: "license-free-trial",
    category: "Licensing & upgrades",
    q: "How many students can I add before I need a license key?",
    a: `A new install runs free indefinitely while active enrolment stays at 30 students or fewer. A bigger
      school gets a 3-month grace period, after which growth actions pause (adding a student, taking a payment,
      generating invoices) - everything else (viewing, editing, reports, exports, backups) keeps working
      regardless. A license key from the Wese~Kwese team covers a chosen number of students and lifts the
      limit.`,
    tags: "trial free students limit how many license",
  },
  {
    id: "license-check-status",
    category: "Licensing & upgrades",
    q: "Where do I see how many days are left on my license?",
    a: `<b>School details \u2192 License</b> shows what's currently active. Once a key is within 30 days of
      expiring, it (and the Admin's Home page) starts showing how many days are left, so there's time to renew
      before anything is affected.`,
    tags: "license expiry days left renew status",
  },
  {
    id: "license-renew",
    category: "Licensing & upgrades",
    q: "How do I renew my license?",
    a: `<p>Open <b>School details &rarr; License</b> and copy this install's ID shown at the top of that page -
      a key only ever works on the install it was minted for, so the Wese~Kwese team needs it to issue a new
      one.</p>
    <ol>
      <li>Email <a href="mailto:wesekwese@gmail.com">wesekwese@gmail.com</a> or call
        +263 79 047 5534 / +263 71 727 1915, and include the install ID.</li>
      <li>The team sends back a new license key.</li>
      <li>An Admin pastes it into the <b>License key</b> field on that same page and saves.</li>
    </ol>
    <p>No reinstalling, and nothing already entered is affected either way - it's safe to renew before or
      after the old key expires. See the <b>Terms of use</b> page (linked in Wese~Kwese's own footer) for the
      full fee and renewal terms.</p>`,
    tags: "renew license key install id new key expiring",
  },
  {
    id: "license-over-cap",
    category: "Licensing & upgrades",
    q: "My enrolment has gone over my license's student cap - what happens?",
    a: `It isn't enforced the instant you tick past the cap. Growth actions only pause once active enrolment is
      more than 5% over the cap, and then only after staying over it for 3 months - with a warning shown on both
      the License page and the Home page the entire time. Contact the Wese~Kwese team for a key with a higher
      cap before that grace period runs out.`,
    tags: "over cap exceeded students license upgrade",
  },
];

// Also usable from Node (the "Ask our AI assistant" function) without affecting the browser,
// where `module` doesn't exist and this block simply never runs.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CATEGORIES, FAQS };
}
