import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { HomeScreen, DetailScreen } from "./screens";
import { View, Text, StyleSheet } from "react-native";

import {
  initializeFirebase,
  subscribeToTrack,
  listenFirebaseChanges
} from "./firebaseService";

const firebaseRefs = {};

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
});

//should come from facebook login
const CURRENT_USER_ID = "whatever";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftData: null,
      usersPerSchedule: {}
    };
  }

  onChangeUsers = (snapshot, trackId) => {
    const visitors = snapshot.val() && snapshot.val().userIds;
    this.setState({
      usersPerSchedule: { ...this.state.usersPerSchedule, [trackId]: visitors }
    });
  };

  addShiftScheduleListener = trackId => {
    const firebaseRef = listenFirebaseChanges(trackId);
    firebaseRef.on("value", snapshot => this.onChangeUsers(snapshot, trackId));
    firebaseRefs[trackId] = firebaseRef;
  };

  componentWillMount() {
    initializeFirebase();
    fetch("https://shift-api.k8s-staging.itpservices.be/v1/schedule")
      .then(response => response.json())
      .then(data => {
        this.setState({ shiftData: data.data });
        return data.data;
      })
      .then(shiftData => {
        shiftData.forEach(shiftSchedule =>
          this.addShiftScheduleListener(shiftSchedule.name)
        );
      });
  }

  componentWillUnmount() {
    Object.keys(firebaseRefs).forEach(trackId =>
      firebaseRefs[firebaseRef].off("value", this.onChangeUsers)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          screenProps={{
            shiftData: this.state.shiftData,
            onChangeSubscription: trackId =>
              subscribeToTrack({
                trackId,
                currentUserId: CURRENT_USER_ID,
                subscribedUsers: this.state.usersPerSchedule[trackId] || []
              }),
            userId: CURRENT_USER_ID,
            usersPerSchedule: this.state.usersPerSchedule
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
