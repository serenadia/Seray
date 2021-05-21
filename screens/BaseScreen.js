import * as React from "react";
import {Component} from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Button, StyleSheet } from "react-native";

function BaseScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#cce5ff", justifyContent: "center" }}
    >
      <Button
        color="#1a88ff"
        title={"Let's take a picture!"}
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbadd5",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
export const test = "Hey";

export default BaseScreen;
