import React from 'react';
import PropTypes from 'prop-types';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {

  // anytime a state variable is modified, the render function is called
  state = { editFormOpen: false, };

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onRemovePress: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired,
  }

  // Timer's edit button is pressed
  handleEditPress = () =>
  {
    this.openForm();
  };

  // TimerForm's cancel button is pressed
  handleFormClose = () =>
  {
    this.closeForm();
  };

  // TimerForm's create button is pressed
  handleSubmit = timer =>
  {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () =>
  {
    this.setState({ editFormOpen: false });
  };

  openForm = () =>
  {
    this.setState({ editFormOpen: true });
  };

  render() {

    const { id, title, project, elapsed, isRunning, onRemovePress, onStartPress, onStopPress } = this.props;

    // if this parameter is not passed in, it is undefined
    // and we treat it as FALSE, otherwise its true
    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return (
            <TimerForm

                id={id}
                title={title}
                project={project}
                onFormSubmit={this.handleSubmit}
                onFormClose={this.handleFormClose}

            />
      );
    }
    return (
      <Timer

        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onEditPress={this.handleEditPress}
        onRemovePress={onRemovePress}
        onStartPress={onStartPress}
        onStopPress={onStopPress}

      />

    );

  }

}
