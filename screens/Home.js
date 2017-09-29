import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

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

  static navigationOptions = {
    title: 'Shift',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        style={styles.container}
        data={[{ title: 'Talk 1'}, { title: 'Talk 2'}]}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Row
          data={item}
          onPress={() => navigate('Detail', { name: item.title })}
        />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

export default HomeScreen;
