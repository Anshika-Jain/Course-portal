// Initialize Firebase
const config = {
      apiKey: "AIzaSyDmA2AbJBh7kVB2RxPx0_Ubra4jq_PwSnA",
    authDomain: "sep-testkit-2.firebaseapp.com",
    databaseURL: "https://sep-testkit-2.firebaseio.com",
    projectId: "sep-testkit-2",

};

firebase.initializeApp(config)

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();