# Step 0
--------

## Execute the following steps on the command line:

* `npm install -g create-react-native-app`

* `create-react-native-app shift-react-native-firebase`

* `cd shift-react-native-firebase`

* `npm start`

[cfr React Native - getting started guide](http://facebook.github.io/react-native/docs/getting-started.html)

## Step 1
---------

 * clone this repository: `git clone https://bitbucket.org/kevinmeyvaert/shift-react-native-firebase.git`

 * cd into folder: `cd shift-react-native-firebase`

 * go to branch: `git checkout step-0-setup-react-native`

### Why?

 * We give you a minimum amount of boilerplate code concerning
 1. Firebase
 2. our Shift Facebook App
 3. our Shift API

 * We added some eslint setup, for the purpose of clean code

## Step 2
---------

 1. Starting point of the app: App.js

 2. Implement firebase

	* [go to https://console.firebase.google.com](https://console.firebase.google.com)

	* Add a Project (f.e.: shift-react-native-firebase)

  * Change Database read/write rules --DEV MODE ONLY--

  ```javascript
      {
        "rules": {
          ".read": true,
          ".write": true
        }
      }
  ```  

	* Edit firebaseConfig.json with your own config

  * `npm install firebase --save`

  * test read/write to firebase with setState

 3. Get and show Shift API data

  * call getShiftData and add to state

  * add FlatList and create Session Component
