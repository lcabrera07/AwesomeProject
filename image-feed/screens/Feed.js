import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class Feed extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.string),
    ),
    onPressComment: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: null,
  };

  state = {
    loading: true,
    error: false,
    items: [],
  };

  // uses async so we can use await call within
  // returns a promise
  async componentDidMount() {
    try {
      const items = await fetchImages();

      this.setState({
        loading: false,
        items,
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  };

  render () {
    const { commentsForItem, onPressComment, style } = this.props;
    const { loading, error, items } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" />
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <SafeAreaView style={style}>
        <CardList
          items={items}
          commentsForItem={commentsForItem}
          onPressComment={onPressComment}
        />
      </SafeAreaView>
    );
  }
}
