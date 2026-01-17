// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

document.getElementById("notifyBtn").addEventListener("click", async () => {

  if (!("Notification" in window)) {
    alert("Notifications not supported");
    return;
  }

  if (Notification.permission === "denied") {
    alert("Notification permission blocked");
    return;
  }

  if (Notification.permission !== "granted") {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;
  }

  const reg = await navigator.serviceWorker.ready;

  reg.showNotification("PWA Notification", {
    body: "Button click se notification aayi hai",
    icon: "https://cdn-icons-png.flaticon.com/512/545/545674.png",
    badge: "https://cdn-icons-png.flaticon.com/512/545/545674.png",
        /* ---------- LANGUAGE & DIRECTION ---------- */
    lang: "en-US",
    dir: "ltr",

    /* ---------- BEHAVIOR ---------- */
    tag: "demo-full-attributes",
    silent: false,
    renotify: true,
    requireInteraction: true,

    /* ---------- DEVICE ---------- */
    vibrate: [200, 100, 200, 100, 300],

    /* ---------- METADATA ---------- */
    timestamp: Date.now(),

    /* ---------- CUSTOM DATA ---------- */
    data: {
      url: "https://example.com",
      source: "pwa-demo",
      userId: 12345
    },
    vibrate: [200, 100, 200],
    requireInteraction: true,
    actions: [
      { action: "open", title: "Open App" },
      { action: "close", title: "Dismiss" }
    ]
  });
});

