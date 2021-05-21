import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }


    onSignUp() {
        const { Email, Password } = this.state;
        firebase.auth().signInWithEmailAndPassword(Email, Password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Email"
                    onChangeText={(Email) => this.setState({Email})}
                />
                <TextInput
                    placeholder = "Password"
                    secureTextEntry= {true}
                    onChangeText={(Password) => this.setState({Password})}
                />
                <Button
                    onPress = {() => this.onSignUp()}
                    title="Sign In"
                />
            </View>
        )
    }
}

export default Login