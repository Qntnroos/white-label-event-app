import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

const ShiftSchedule = ({ navigation: { navigate }, scheduleItem }) => (
  <ListItem
    title={scheduleItem.name}
    subtitle={scheduleItem.track}
    onPress={() => navigate('Detail', { scheduleItem })}
    renderSeparator={(sectionId, rowId) => <View key={rowId} />}
  />
);

export default ShiftSchedule;
