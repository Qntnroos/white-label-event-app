import React from "react";
import { View, FlatList, Text, StyleSheet, Spinner } from "react-native";
import { NavigationActions } from "react-navigation";

import { Row } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  }
});

const HomeScreen = ({
  navigation: { navigate },
  screenProps: { shiftData }
}) => (
  <FlatList
    style={styles.container}
    data={shiftData}
    keyExtractor={item => item.name}
    renderItem={({ item }) => (
      <Row
        title={item.name}
        onPress={() => navigate("Detail", { scheduleItem: item })}
      />
    )}
    renderSeparator={(sectionId, rowId) => (
      <View key={rowId} style={styles.separator} />
    )}
  />
);

HomeScreen.navigationOptions = {
  title: "Shift"
};

export default HomeScreen;
