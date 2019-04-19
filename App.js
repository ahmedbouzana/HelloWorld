/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.customStyles = {
      color: "red"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={styles.text}>This is style half1</Text>
        </View>
        <View style={styles.half2}>
          <Text>This is style half2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  half1: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  half2: {
    flex: 1,
    backgroundColor: "yellow"
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
