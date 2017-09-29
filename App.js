import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { HomeScreen, DetailScreen } from "./screens";
import { View, Text, StyleSheet } from "react-native";

import {
  initializeFirebase,
  listenFirebaseChanges,
  subscribeToTrack
} from "./firebaseService";

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftData: null
    };
  }

  componentWillMount() {
    initializeFirebase();
    fetch("https://shift-api.k8s-staging.itpservices.be/v1/schedule")
      .then(response => response.json())
      .then(data => {
        this.setState({ shiftData: data.data });
        listenFirebaseChanges(data.data);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          screenProps={{
            shiftData: this.state.shiftData,
            subscribe: trackId => subscribeToTrack(trackId, "jonathan")
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
