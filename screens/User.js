import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import { Header } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },
});

class UserScreen extends Component {
  renderLoginButton() {
    const { login } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Text style={styles.whiteText}>
          Have a great day at Shift! Please login to subscribe for talsk & sessions troughout the day.
        </Text>
        <Button title="Login" onPress={() => login()} />
      </View>
    );
  }

  renderProfile() {
    const { userInfo } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          source={{ uri: userInfo.picture.data.url }}
        />
        <Text style={styles.whiteText}>
          Have a great day at Shift {userInfo.first_name}!
        </Text>
      </View>
    );
  }

  render() {
    const { userInfo } = this.props.screenProps;
    if (!userInfo.id) {
      return this.renderLoginButton();
    }
    return this.renderProfile();
  }
}

UserScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: screenProps.userInfo ? screenProps.userInfo.name : 'Login',
  header: <Header navigate={navigation.navigate} goBack={navigation.goBack} user />,
});

export default UserScreen;
