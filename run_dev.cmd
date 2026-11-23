@echo off
cd /d "%~dp0"
npx --yes netlify-cli@27 dev --port 8899
