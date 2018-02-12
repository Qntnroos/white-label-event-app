import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function subscribeToTrack({ trackId, currentUserId, subscribedUsers = [] }) {
  const userIds = [...subscribedUsers];
  if (subscribedUsers.indexOf(currentUserId) !== -1) {
    userIds.pop(currentUserId);
  } else {
    userIds.push(currentUserId);
  }

  firebase
    .database()
    .ref(`tracks/${trackId}`)
    .set({
      userIds,
    });
}

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey === '<YOUR-API-KEY>') {
    throw new Error('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
  }
  firebase.initializeApp(firebaseConfig);
}

// Returns a firebase Database reference
export function listenFirebaseChanges(trackId) {
  return firebase.database().ref(`tracks/${trackId}`);
}
