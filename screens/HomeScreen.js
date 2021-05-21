//import { ScaleFromCenterAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#cce5ff", justifyContent: 'center' }}>
      
      <Text style={{ color: "white", textAlign: "center", alignSelf: 'center', fontSize: 30}}>
        Welcome to Seray!
      </Text>
      <Text style={{ color: "white", textAlign: "center", alignSelf: 'center', fontSize: 22}}>
        Your skincare bestie
      </Text>
      <StatusBar style="auto" />
      <Button
        color= "#1a88ff"
        margin= '10'
        title="Get started"
        onPress={() => navigation.navigate("Landing")}
      />
    </View>
  );
};



export default HomeScreen;
