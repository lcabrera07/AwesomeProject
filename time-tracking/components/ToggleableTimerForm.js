import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm ( { isOpen } ) {

  return (

    <View
      stye={
        [
          styles.container, !isOpen && styles.buttonPadding
        ]
      }
    >

      {

        // if it is open then return a empty form, if it is NOT open
        // then display a button with a black '+'
        isOpen ? (<TimerForm />) : (<TimerButton title="+" color="black"/>)

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
