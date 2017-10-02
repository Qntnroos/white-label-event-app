import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Button } from "react-native-elements";

class UserScreen extends Component {

  renderLoginButton() {
    const { login } = this.props.screenProps;
    return (
      <View>
        <Button title="Login" onPress={() => login()} />
      </View>
    )
  }

  renderProfile() {
    const { userInfo } = this.props.screenProps;
    return (
      <View>
        <Card
          image={{uri: userInfo.picture.data.url }}>
          <Text style={{marginBottom: 10}}>
            Have a great day at Shift!
          </Text>
        </Card>
      </View>
    )
  }

  render(){
    const { userInfo } = this.props.screenProps;
    if(!userInfo.id){
      return this.renderLoginButton();
    } else {
      return this.renderProfile();
    }
  }

}

UserScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: screenProps.userInfo ? screenProps.userInfo.name : 'Login',
});

export default UserScreen;
