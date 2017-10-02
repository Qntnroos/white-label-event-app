import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { HomeScreen, DetailScreen, UserScreen } from "./screens";
import { View, StyleSheet } from "react-native";
import * as firebase from "firebase";
import { AuthSession } from 'expo';

const FB_APP_ID = '937139713101714';

import {
  initializeFirebase,
  listenFirebaseChanges,
  subscribeToTrack
} from "./firebaseService";

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  User: { screen: UserScreen }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftData: null,
      userInfo: null
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

  handleUserLogin = async() => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    let accessToken = result.params.access_token;
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    );
    const userInfo = await userInfoResponse.json();
    this.setState({ userInfo });
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          screenProps={{
            shiftData: this.state.shiftData,
            subscribe: trackId => subscribeToTrack(trackId, "jonathan"),
            userInfo: this.state.userInfo,
            login: () => this.handleUserLogin(),
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
