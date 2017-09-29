import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

tracks = {};

export function subscribeToTrack(trackId, userId) {
  const userIds = tracks[trackId] ? [...tracks[trackId], userId] : [userId];

  firebase
    .database()
    .ref("tracks/" + trackId)
    .set({
      userIds
    });
}

//setup a listeners per track
function setupTrackListener(trackId) {
  firebase
    .database()
    .ref("tracks/" + trackId)
    .on("value", snapshot => {
      const highscore = snapshot.val().userIds;
      console.log("New high score: " + highscore);
    });
}

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig) {
    throw new Error("Add your own firebaseConfig.json file");
  }
  firebase.initializeApp(firebaseConfig);
}

export function listenFirebaseChanges(data) {
  console.log("data", data);
}
