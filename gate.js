/* ============================================================
   DEMO LOGISTICS — HUB ACCESS GATE (shared script)

   Host this file alongside your Hub, e.g.:
     https://komsan-kongsuwan.github.io/YOUR-HUB-REPO/gate.js

   Then add ONE line to each target app, right after <body>:
     <script src="https://komsan-kongsuwan.github.io/YOUR-HUB-REPO/gate.js"></script>

   To update the message, hub URL, or time window later,
   edit only THIS file — every app picks up the change.
   ============================================================ */

(function () {
  var HUB_URL    = "https://komsan-kongsuwan.github.io/YOUR-HUB-REPO/"; // ← set your Hub URL
  var MAX_AGE_MS = 60000; // token valid for 60 seconds

  var params = new URLSearchParams(window.location.search);
  var token  = params.get('dlhub');
  var ts     = parseInt(params.get('t'), 10);

  var valid = (token === '1') && !isNaN(ts) && (Date.now() - ts) < MAX_AGE_MS;

  if (!valid) {
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<title>Access via Hub Required</title></head>' +
      '<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'font-family:sans-serif;background:#f1f5f9;text-align:center;padding:24px;box-sizing:border-box;">' +
      '<div style="max-width:380px;">' +
        '<div style="font-size:48px;margin-bottom:12px;">🔒</div>' +
        '<h1 style="color:#1e293b;font-size:1.4rem;margin:0 0 10px;">Please use the Demo Logistics Hub</h1>' +
        '<p style="color:#64748b;font-size:0.95rem;line-height:1.6;margin:0 0 20px;">' +
          'This app can only be opened from the main hub. ' +
          'Please go to the hub and select this tool from the menu.' +
        '</p>' +
        '<a href="' + HUB_URL + '" style="display:inline-block;padding:10px 28px;' +
          'background:#d97706;color:#fff;border-radius:8px;text-decoration:none;' +
          'font-weight:bold;font-size:0.9rem;">Go to Hub</a>' +
      '</div>' +
      '</body>';
    throw new Error('Blocked: access must go through Hub');
  }
})();
