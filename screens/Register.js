import React, { Component } from 'react'
import { View, Button, TextInput} from 'react-native'
import firebase from 'firebase'
import "firebase/firestore";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email
            })
        console.log(result)
        })
        .catch((error) => {
            console.log(error)
        }) 
    }

    render() {
        return (
            <View style ={{flex: 1, backgroundColor: "#cce5ff", justifyContent: 'center'}}>
                <TextInput stlye = {{justifyContent: 'center'}}
                    placeholder= "Name"
                    onChangeText={(Name) => this.setState({Name})}
                />
                  <TextInput
                    placeholder= "Email"
                    onChangeText={(Email) => this.setState({Email})}
                />
                  <TextInput
                    placeholder= "Password"
                    secureTextEntry={true}
                    onChangeText={(Password) => this.setState({Password})}
                />

                <Button
                    onPress={() => this.onSignUp() && 'BaseScreen'}
                    title = "Sign up"
                />
            </View>
        )
    }

}

export default Register