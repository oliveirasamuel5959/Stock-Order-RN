import { 
    KeyboardAvoidingView, 
    Text, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity
    } from 'react-native';

import React from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/firebaseConfig"

class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            messages: "",
            loggedInStatus: false,
        }
    }

    handleLogin = () => {
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredentials) => {
            const user = userCredentials.user
            console.log('Logged in with:', this.state.email)

            result = {
                symbol: "",
                symbolName: "",
                totalPrice: "",
                price: "",
                shares: "",
                name: "Welcome," + this.state.email
            }
            this.setState({
                messages: "Login Success!", 
                loggedInStatus: true,
                email: "",
                password: "",
            })

            this.props.navigation.navigate("Dashboard", {result})
        })
        .catch(error => alert(error.message))
      }

    render() {
        //console.log(this.props)
        return(
            <KeyboardAvoidingView style={styles.container}>
            { this.state.loggedInStatus && <Text style={{color: 'green', paddingBottom: 10}}>{this.state.messages}</Text> }
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder="Email"
                />
                <TextInput
                    secureTextEntry={true} 
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder="Password"
                />
                <View style={{paddingTop: 20}}>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={this.handleLogin.bind(this)}>
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        width: 250,
        padding: 10,
        borderRadius: 5,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#3b85f5",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})