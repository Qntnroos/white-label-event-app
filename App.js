import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { initializeFirebase, testWriteFirebaseDatabase, testListenFirebaseDatabase } from './utils/firebaseService';
import getShiftData from './utils/shiftService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: null,
      shiftData: null,
      detailItem: null,
    };
  }

  componentWillMount() {
    initializeFirebase();
    testListenFirebaseDatabase().on('value', (snapshot) => {
      console.log('something changed to the database:', snapshot);
      this.setState({ metadata: snapshot.val() });
    });
    getShiftData().then(shiftData => this.setState({ shiftData: shiftData.data }));
  }

  componentDidMount() {
    testWriteFirebaseDatabase('In The Pocket');
  }

  onItemPress = item => this.setState({ detailItem: item })

  onBackPress = () => this.setState({ detailItem: null })

  renderHomePage() {
    return <Home {...this.state} onItemPress={this.onItemPress} />;
  }

  renderDetailpage() {
    return <Detail {...this.state} onBackPress={this.onBackPress} />;
  }

  render() {
    const { detailItem } = this.state;
    return !detailItem ? this.renderHomePage() : this.renderDetailpage();
  }
}
