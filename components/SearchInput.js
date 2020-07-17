import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';

export default class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleChangeText = (text) => {
    this.setState({ text: text });
  }

  handleSubmitText = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: ''});
  }

  render() {

    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autocorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'yellow',
  },
});
