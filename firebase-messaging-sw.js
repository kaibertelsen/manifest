// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyD5pUlPUIFZOkoBsnAexlOB4yhGP8Z6d5U',
    authDomain: "pushwebapp-624c1.firebaseapp.com",
  databaseURL: 'https://project-id.firebaseio.com',
    projectId: "pushwebapp-624c1",
  storageBucket: 'pushwebapp-624c1.appspot.com',
  messagingSenderId: '406735006208',
  appId: '1:406735006208:web:c20df0af0aea1cf88446e5',
  measurementId: 'G-2L5RV4Q2ZG',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    /*
    // Customize notification here
    const notificationTitle = 'Test title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  */
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
