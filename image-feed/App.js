import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

export default class App extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,
  };

  openCommentScreen = id => {
    this.setState(
      {
        showModal: true,
        selectedItemId: id,
      }
    );
  };

  closeCommentScreen = () => {
    this.setState(
      {
        showModal: false,
        selectedItemId: null,
      }
    );
  };

  onSubmitComment = (text) => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }

    this.setState(
      { commentsForItem: updated }
    );
  };

  render() {
    const { commentsForItem, showModal, selectedItemId } = this.state;

    return (
      <View style={styles.container}>

        <Feed
          style={styles.feed}
          commentsForItem={commentsForItem}
          onPressComment={this.openCommentScreen}
        />

        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen}
        >
          <Comments
            style={styles.comments}
            comments={commentsForItem[selectedItemId]||[]}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>

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
  comments: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
