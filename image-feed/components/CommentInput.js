import {StyleSheet, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default class CommentInput extends React.Component {
  // object that holds the types for its properties
  // it makes sure the users pass in the correct types
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  // if the user does not provide a property value we have its default here
  static defaultProps = {
    placeholder: '',
  };

  // an object holding the components state
  state = {
    text: '',
  };

  // handle when the text is changed
  handleChangeText = text => {
    this.setState({ text: text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    // if text is empty then do nothing
    if (!text) return;

    // call the components parent function which was passed in as a callback property
    onSubmit(text);

    // update the state the correct way by using the components setState function
    this.setState( { text: text } )
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create(
  {
    container: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(0,0,0,0.1)',
      paddingHorizontal: 20,
      height: 60,
    },
    input: {
      flex: 1,
    },
  }
);
