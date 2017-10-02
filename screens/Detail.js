import React from "react";
import { Text, View } from "react-native";
import { Row } from "../components";
import { Card, SocialIcon, Button } from "react-native-elements";

const DetailScreen = ({
  navigation: { state: { params } },
  screenProps: { onChangeSubscription, usersPerSchedule, userId }
}) => {
  const users = usersPerSchedule[params.scheduleItem.name] || [];
  const isSubscribed = users.indexOf(userId) !== -1;

  return (
    <View>
      <Text style={{ marginBottom: 10 }}>
        {params.scheduleItem.description}
      </Text>
      <SocialIcon
        title={params.scheduleItem.speakers[0].contact.twitterHandle}
        button
        type="twitter"
      />
      <Button
        raised
        icon={{ name: "cached" }}
        title={isSubscribed ? "Unsubscribe" : "Subscribe"}
        onPress={() => onChangeSubscription(params.scheduleItem.name)}
      />
      <Text>{"userId: " + userId} </Text>
      <Text>{"users:" + users.length} </Text>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name
});

export default DetailScreen;
