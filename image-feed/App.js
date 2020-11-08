import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AsyncStorage, Modal, Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

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

  onSubmitComment = async text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }

    this.setState(
      { commentsForItem: updated }
    );

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated),
      );
    }
    catch (e) {
      console.log('Failed to save comment', text, 'for', selectedItemId);
    }
  };

  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);

      this.setState(
        {commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {},}
      )
    }
    catch (e) {
      console.log('Failed to load comments');
    }
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
