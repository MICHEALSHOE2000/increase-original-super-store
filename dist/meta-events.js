(function () {
  function track(eventName, parameters) {
    if (typeof window.fbq === "function") {
      window.fbq("track", eventName, parameters);
    }
  }

  function branchFor(link) {
    const details = decodeURIComponent((link.href || "") + " " + (link.textContent || ""));
    if (/badagry|2347037304816/i.test(details)) return "Badagry";
    if (/apapa|2348084245962/i.test(details)) return "Apapa";
    return document.body?.dataset.branch || "Unknown";
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.href || link.getAttribute("href") || "";

    if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) {
      track("Contact", {
        contact_method: "WhatsApp",
        branch: branchFor(link)
      });
      return;
    }

    if (/^tel:/i.test(link.getAttribute("href") || "")) {
      track("Contact", {
        contact_method: "Phone",
        branch: branchFor(link)
      });
      return;
    }

    if (/google\.[^/]+\/maps|maps\.app\.goo\.gl/i.test(href)) {
      track("FindLocation", {
        branch: branchFor(link)
      });
    }
  });
})();
