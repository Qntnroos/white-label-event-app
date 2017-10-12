import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { initializeFirebase, testWriteFirebaseDatabase, testListenFirebaseDatabase } from './utils/firebaseService';
import getShiftData from './utils/shiftService';
import Session from './components/Session';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: null,
      shiftData: null,
    };
  }

  componentWillMount() {
    initializeFirebase();
    testListenFirebaseDatabase().on('value', (snapshot) => {
      console.log('something changed to the database:', snapshot);
      this.setState({ metadata: snapshot.val() });
    });
    getShiftData().then(shiftData => this.setState({ shiftData: shiftData.data }));
  }

  componentDidMount() {
    testWriteFirebaseDatabase('In The Pocket');
  }

  render() {
    const { metadata, shiftData } = this.state;
    return (
      <View style={styles.container}>
        <Text>{metadata && metadata.owner}</Text>
        <Text>{metadata && metadata.workshop}</Text>
        <FlatList data={shiftData} keyExtractor={item => item.name} renderItem={({ item }) => <Session key={item.name} session={item} />} />
      </View>
    );
  }
}
