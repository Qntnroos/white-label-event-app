import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import ShiftSchedule from './ShiftSchedule';
import { Header } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

const HomeScreen = ({ screenProps: { shiftData }, navigation }) => (
  <FlatList
    style={styles.container}
    data={shiftData}
    keyExtractor={item => item.name}
    renderItem={({ item }) => (
      <ShiftSchedule scheduleItem={item} navigation={navigation} />
    )}
  />
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Shift',
  header: <Header navigate={navigation.navigate} />,
});

export default HomeScreen;
