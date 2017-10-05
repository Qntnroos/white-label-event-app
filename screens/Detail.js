import React from 'react';
import { View, Linking } from 'react-native';
import { Button, Badge, Card, List, ListItem, Text } from 'react-native-elements';
import { Header } from '../components';

const DetailScreen = ({ navigation: { state: { params }, navigate }, screenProps: { onChangeSubscription, usersPerSchedule, userId } }) => {
  const users = usersPerSchedule[params.scheduleItem.name] || [];
  const isSubscribed = users.indexOf(userId) !== -1;

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'white', padding: 30 }}>
      <Card title={params.scheduleItem.name} style={{ flex: 1 }}>
        <Text>{params.scheduleItem.description}</Text>
        <View style={{ marginTop: 50 }}>
          <Text h4>Speakers:</Text>
          <List containerStyle={{ marginBottom: 20 }}>
            {params.scheduleItem.speakers.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={{ uri: 'http://lorempixel.com/200/200/cats/' }}
                key={l.name}
                title={l.name}
                subtitle={l.company}
                onPress={() => Linking.openURL(`https://twitter.com/${l.contact.twitterHandle}`)}
              />
            ))}
          </List>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text h4>
            When: {params.scheduleItem.schedule.startTime} - {params.scheduleItem.schedule.endTime}
          </Text>
          <Text h4>Where: {params.scheduleItem.location}</Text>
        </View>
      </Card>
      <View>
        <Badge containerStyle={{ margin: 32 }}>
          <Text style={{ color: '#FFFFFF' }}>{`Attendees:${users.length}`}</Text>
        </Badge>
        {userId ? (
          <Button
            raised
            icon={{ name: 'cached' }}
            title={isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            onPress={() => onChangeSubscription(params.scheduleItem.name)}
          />
        ) : (
          <Button raised title="Login to subscribe" onPress={() => navigate('User')} />
        )}
      </View>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.scheduleItem.name,
  header: <Header navigate={navigation.navigate} goBack={navigation.goBack} />,
});

export default DetailScreen;
