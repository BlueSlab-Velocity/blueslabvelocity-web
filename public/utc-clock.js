/* BSV live UTC clock.
 * Mounts on every page (works with Astro View Transitions).
 * Format: "UTC HH:MM:SS · YYYY-MM-DD" (24h, ISO date).
 * Ticks once a second, re-aligned to wall clock to avoid drift.
 */
(function () {
  var timer = null;

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function format(d) {
    return (
      "UTC " +
      pad(d.getUTCHours()) +
      ":" +
      pad(d.getUTCMinutes()) +
      ":" +
      pad(d.getUTCSeconds()) +
      " \u00b7 " +
      d.getUTCFullYear() +
      "-" +
      pad(d.getUTCMonth() + 1) +
      "-" +
      pad(d.getUTCDate())
    );
  }

  function tick() {
    var els = document.querySelectorAll("[data-bsv-utc]");
    if (!els.length) return;
    var now = new Date();
    var text = format(now);
    var iso = now.toISOString();
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = text;
      els[i].setAttribute("datetime", iso);
    }
  }

  function start() {
    stop();
    tick();
    // Align next tick to the next whole second.
    var delay = 1000 - (Date.now() % 1000);
    timer = setTimeout(function () {
      tick();
      timer = setInterval(tick, 1000);
    }, delay);
  }

  function stop() {
    if (timer) {
      clearTimeout(timer);
      clearInterval(timer);
      timer = null;
    }
  }

  document.addEventListener("astro:page-load", start);
  document.addEventListener("astro:before-swap", stop);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") start();
    else stop();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
