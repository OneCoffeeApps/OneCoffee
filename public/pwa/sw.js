self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "OneCoffee";
    const options = {
        body: data.body || "Tu Mac está a punto de entrar en reposo.",
        icon: "/icon.png",
        vibrate: [200, 100, 200],
        data: { url: "/" }
    };
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
