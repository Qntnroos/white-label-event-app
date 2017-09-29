import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Row } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  static navigationOptions = {
    title: 'Shift',
  };

  componentDidMount() {
    this.fetchAppData();
  }

  fetchAppData() {
    fetch('https://shift-api.k8s-staging.itpservices.be/v1/schedule')
      .then(response => response.json())
      .then(data => this.setState({ shiftData: data.data }))
  }

  render() {
    const { navigate } = this.props.navigation;
    const { shiftData } = this.state;
    return (
      <FlatList
        style={styles.container}
        data={shiftData}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Row
          data={item}
          onPress={() => navigate('Detail', { sheduleItem: item })}
        />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

export default HomeScreen;
