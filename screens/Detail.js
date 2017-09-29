import React from 'react';
import { Text } from 'react-native';
import { Card, SocialIcon } from 'react-native-elements';

class DetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.sheduleItem.name,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Card>
        <Text style={{marginBottom: 10}}>
          {params.sheduleItem.description}
        </Text>
        <SocialIcon
          title={params.sheduleItem.speakers[0].contact.twitterHandle}
          button
          type='twitter'
        />
      </Card>
    );
  }
}

export default DetailScreen;
