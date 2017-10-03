import React from 'react';
import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Row = props => (
  <Button
    style={styles.container}
    title={props.title}
    onPress={props.onPress}
  />
);

export default Row;
