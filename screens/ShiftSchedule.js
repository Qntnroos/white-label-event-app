import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { listenFirebaseChanges } from "../firebaseService";

export default class ShiftSchedule extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { scheduleItem } = this.props;

    return (
      <ListItem
        title={scheduleItem.name}
        subtitle={scheduleItem.track}
        onPress={() => navigate("Detail", { scheduleItem })}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={styles.separator} />
        )}
      />
    );
  }
}
