import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig) {
    throw new Error('Add your own firebaseConfig.json file');
  }
  firebase.initializeApp(firebaseConfig);
}

export function testWriteFirebaseDatabase(name) {
  firebase
    .database()
    .ref('metadata')
    .set({ owner: name, workshop: 'Shift' });
}

export function testListenFirebaseDatabase() {
  return firebase.database().ref('metadata');
}

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

// Returns a firebase Database reference
export function listenFirebaseChanges(trackId) {
  return firebase.database().ref(`tracks/${trackId}`);
}
