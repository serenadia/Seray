import React from "react"
import { Text, View, Button } from "react-native"


const Landing = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#cce5ff", justifyContent: "center" }}
    >
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="In a rush?"
        onPress={() => navigation.navigate("BaseScreen")}
      />
  
    </View>
  )
}

//import React from 'react'
//import { Text, View, Button } from 'react-native'
/*
const Landing = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")} />
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")} />
        </View>
    )
}
*/
export default Landing 
