/* BSV live London clock.
 * Mounts on every page (works with Astro View Transitions).
 * Format: "GMT HH:MM:SS · YYYY-MM-DD" or "BST HH:MM:SS · YYYY-MM-DD"
 * — auto-switches with Europe/London DST. 24h, ISO date.
 * Ticks once a second, re-aligned to wall clock to avoid drift.
 */
(function () {
  var timer = null;

  // Pull localised parts in one call so date/time/zone all match the same instant.
  var fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  function format(d) {
    var parts = fmt.formatToParts(d);
    var p = {};
    for (var i = 0; i < parts.length; i++) p[parts[i].type] = parts[i].value;
    var zone = p.timeZoneName === "GMT+1" ? "BST" : (p.timeZoneName || "GMT");
    return (
      zone + " " +
      p.hour + ":" + p.minute + ":" + p.second +
      " \u00b7 " +
      p.year + "-" + p.month + "-" + p.day
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
