import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const Home = ({ metadata, shiftData, onItemPress }) => (
  <View style={styles.container}>
    <Text>{metadata && metadata.owner}</Text>
    <Text>{metadata && metadata.workshop}</Text>
    <FlatList
      data={shiftData}
      keyExtractor={item => item.name}
      renderItem={({ item }) => (<ListItem
        key={item.name}
        title={item.name}
        subtitle={item.track}
        onPress={() => onItemPress(item)}
      />)}
    />
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

export default Home;
