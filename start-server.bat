@echo off
cd /d "%~dp0"
echo Starting Cisco IT Essentials Virtual Desktop on http://localhost:8080 ...
start "" "http://localhost:8080"
node server.mjs
