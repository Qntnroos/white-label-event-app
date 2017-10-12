import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Session = ({ session }) => (
  <View style={styles.container}>
    <Text>{`Name: ${session.name}`} </Text>
    <Text>{`Description: ${session.description}`} </Text>
  </View>
);

export default Session;
