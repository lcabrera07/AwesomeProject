import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Text style={[styles.largeText, styles.textStyle]}>
        San Francisco
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Cloud
      </Text>
      <Text style={[styles.largeText, styles.textStyle]}>
        28°
      </Text>

      <TextInput
        autocorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS == 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
    ...Platform.select({
      android: { color: "black" },
      ios: { color: "grey" },
    })
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    borderColor: 'purple',
    borderWidth: 1,
    width: 300,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
