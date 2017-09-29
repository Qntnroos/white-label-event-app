import React from 'react';
import { Text } from 'react-native';

class DetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>{params.name}</Text>
    );
  }
}

export default DetailScreen;
