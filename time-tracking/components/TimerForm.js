import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import TimerButton from './TimerButton';
import { generateNumber } from '../utils/TimerUtils';

export default class TimerForm extends React.Component {

  // we use a constructor because we are checking and defining our state
  // based on the props passed in
  constructor(props) {
    super(props) // we use super here so that we can use 'this' in this constructor method

    const { id, title, project } = props;

    // set this timer forms, if id is undefined (false) then title and project are empty
    this.state = {
      title: id ? title : '',
      project: id ? project : '',
    };
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  }

  static defaultProps = {
    id: '',
    title: '',
    project: '',
  }

  handleTitleChange = title => {
    this.setState({title})
  }

  handleProjectChange = project => {
    this.setState({project});
  };

  handleSubmit = () => {

    const { id, onFormSubmit } = this.props;
    const { title, project } = this.state;

    onFormSubmit (
      {id, title, project,} // this is a data object
    );
  }

  render() {

    const { id, onFormClose } = this.props;
    const { title, project } = this.state;

    const submitText = id ? 'Update' : 'Create';

    return (

      <View style={styles.formContainer}>

        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Title</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleTitleChange}
              value={title}
            />
          </View>
        </View>

        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Project</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleProjectChange}
              value={project}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TimerButton small color="#21BA45" title={submitText} onPress={this.handleSubmit} />
          <TimerButton small color="#DB2828" title="Cancel" onPress={onFormClose} />
        </View>

      </View>

    );

  }
}


const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height:30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
