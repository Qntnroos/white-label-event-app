import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen, DetailScreen } from './screens';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

export default App;
