import React from 'react';
import { Text } from 'react-native';

class DetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.sheduleItem.name,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>{params.sheduleItem.description}</Text>
    );
  }
}

export default DetailScreen;
