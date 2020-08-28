import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Feed from './screens/Feed';

const items = [
  { id: 1, author: 'Frank Cabrera' },
  { id: 2, author: 'Diego Cabrera' },
  { id: 3, author: 'Luis Cabrera' },
  { id: 4, author: 'Xavier Cabrera' },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} />
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
  },
});
