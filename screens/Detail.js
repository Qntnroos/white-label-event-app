import React from "react";
import { Text, View } from "react-native";
import { NavigationActions } from "react-navigation";
import { Row } from "../components";
import { Card, SocialIcon, Button, Badge, Avatar } from "react-native-elements";

const DetailScreen = ({
  navigation: { state: { params }, navigate },
  screenProps: { onChangeSubscription, usersPerSchedule, userId }
}) => {
  const users = usersPerSchedule[params.scheduleItem.name] || [];
  const isSubscribed = users.indexOf(userId) !== -1;

  return (
    <View>
      <Text style={{ margin: 32 }}>
        {params.scheduleItem.description}
      </Text>
      <SocialIcon
        title={params.scheduleItem.speakers[0].contact.twitterHandle}
        button
        type="twitter"
      />
      {userId ?
      <View>
        <Button
          raised
          icon={{ name: "cached" }}
          title={isSubscribed ? "Unsubscribe" : "Subscribe"}
          onPress={() => onChangeSubscription(params.scheduleItem.name)}
        />
        <Badge containerStyle={{ margin: 32 }}>
          <Text style={{ color: "#FFFFFF" }}>{"Attendees:" + users.length}</Text>
        </Badge>
      </View>
      :
      <Button
        raised
        title="Login to subscribe"
        onPress={() => navigate("User")}
      />
      }
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name
});

export default DetailScreen;
