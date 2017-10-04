import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Detail = ({ detailItem: { name, description }, onBackPress }) => (
  <View style={styles.container}>
    <Card>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Card>
    <Button title="Back" onPress={() => onBackPress()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default Detail;
