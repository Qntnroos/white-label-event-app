import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

const Row = (props) => (
  <Button style={styles.container} title={props.data.title} onPress={props.onPress} />
);

export default Row;
