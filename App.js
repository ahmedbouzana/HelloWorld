/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    //const username = this._username._lastNativeText;
    //const password = this._password._lastNativeText;

    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Text>Password</Text>
        <TextInput
          defaultValue={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title={"Hello"} onPress={this.buttonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  }
});
