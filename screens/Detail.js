import React from "react";
import { Text, View } from "react-native";
import { Row } from "../components";
import { Card, SocialIcon, Button } from "react-native-elements";

const DetailScreen = ({
  navigation: { state: { params } },
  screenProps: { subscribe }
}) => (
  <View>
    <Text style={{ marginBottom: 10 }}>{params.scheduleItem.description}</Text>
    <SocialIcon
      title={params.scheduleItem.speakers[0].contact.twitterHandle}
      button
      type="twitter"
    />
    <Button raised icon={{ name: "cached" }} title="Subscribe" />
  </View>
);

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name
});

export default DetailScreen;
