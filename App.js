/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "Edit Me!"
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />
        <Text>You are writing {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
