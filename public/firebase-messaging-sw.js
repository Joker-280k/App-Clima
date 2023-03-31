importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyDz9atkxk1QEPdpUNytQViKEmKsI5HZnzw",
    authDomain: "notificaciones-d5992.firebaseapp.com",
    projectId: "notificaciones-d5992",
    storageBucket: "notificaciones-d5992.appspot.com",
    messagingSenderId: "570974097862",
    appId: "1:570974097862:web:8c8a64662b85a1afc322c7"
  };
  
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logi192.png"
    };

    return self.ServiceWorkerRegistration.showNotification(
        notificationTitle,
        notificationOptions
    )
})