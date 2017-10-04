# Give React Native a try: Setup your own React Native app
--------

## Execute the following steps on the command line:

* `npm install -g create-react-native-app`

* `create-react-native-app shift-react-native-firebase`

* `cd shift-react-native-firebase`

* `npm start`

[cfr React Native - getting started guide](http://facebook.github.io/react-native/docs/getting-started.html)


# The real thing: Start building the Shift App
---------
## step-0-setup-react-native
---------

 * clone this repository: `git clone https://bitbucket.org/kevinmeyvaert/shift-react-native-firebase.git`

 * cd into folder: `cd shift-react-native-firebase`

 * go to branch: `git fetch && git checkout step-0-setup-react-native`

### Why?

 * We give you a minimum amount of boilerplate code concerning
 1. Firebase
 2. our Shift API
 3. our Shift Facebook App

 * We added some eslint setup, for the purpose of clean code

### Next steps

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

  * call getShiftData and add to state/props

  * create Session Component

  * add FlatList

## step1-style-components
---------

  * `git fetch && git checkout step1-style-components`

  * `npm install react-native-elements --save`

### Next steps

  * Replace Flatlist Session with react-native-elements components ListItem
  * State management to display detailpage
  * Split render functions
  * This is getting bulky, split up to screens/components
