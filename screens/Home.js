import React from "react";
import { View, FlatList, Text, StyleSheet, Spinner } from "react-native";
import { NavigationActions } from "react-navigation";
import ShiftSchedule from "./ShiftSchedule";

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

HomeScreen.navigationOptions = {
  title: "Shift"
};

export default HomeScreen;
