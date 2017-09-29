import React from "react";
import { Text, View } from "react-native";
import { Row } from "../components";

const DetailScreen = ({
  navigation: { state: { params } },
  screenProps: { subscribe }
}) => (
  <View>
    <Text>{params.scheduleItem.description}</Text>
    <Row
      title={"Subscribe"}
      onPress={() => subscribe(params.scheduleItem.name)}
    />
  </View>
);

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name
});

export default DetailScreen;
