import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FB_KEY,
    authDomain: process.env.FB_DOMAIN,
    databaseURL: process.env.FB_DOMAIN,
    appId: process.env.FB_APP_ID,
    projectId: process.env.FB_NAME,
  });
}
export default firebase;
