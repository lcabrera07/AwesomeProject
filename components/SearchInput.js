import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

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

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor:'#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf:'center',
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
