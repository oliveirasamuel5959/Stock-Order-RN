/**
 * Import React Components
 */
import React from "react";
import { 
    KeyboardAvoidingView, 
    View,
    Text, 
    StyleSheet, 
    TextInput,
    Vibration,
    TouchableOpacity} from 'react-native';

/**
 * import Stocks API from JSON file
 */
import db from '../db.json'
import Apology from '../screens/Apology'

/**
 * BuyScreen class components
 * 
 * @version 2.4
 * @author Samuel Oliveira
 * @description  Class component that resquest data from stocks API and outputs to the user
 */


export default class BuyScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            symbol: "",
            shares: "",
            formError: "",
            formIsValid: false,
            message: "",
        }
    }

    // Form validation to check users input
    validadeForm() {
        let size = Object.keys(db.result).length // stocks API data len
        result = {}

        // loop to check if the user stock request exist
        // in the stocks API
        for (let i = 0; i < size; i++)
        {
            if (db.result[i]['symbol'] === this.state.symbol)
            {
                let finalPrice = this.state.shares*db.result[i]['price']
                result = {
                    symbol: db.result[i]['symbol'],
                    symbolName: db.result[i]['symbolName'],
                    totalPrice: finalPrice.toFixed(2),
                    price: db.result[i]['price'],
                    shares: this.state.shares,
                }
                //console.log("size", size);
                this.setState({formIsValid: true, symbol: "", shares: ""})
                Vibration.vibrate(1000)
                this.props.navigation.navigate("Dashboard", {result})
            }
        }
        if (Object.keys(result).length === 0) {
            this.setState({message: "INVALID INPUT"})
            message = this.state.message
            this.props.navigation.navigate("Sorry", {message})
        } else if (this.state.shares === "") {
            this.setState({message: "Shares Field Empty"})
            message = this.state.message
            this.props.navigation.navigate("Sorry", {message})
        }
    }

    // render user front-end view
    render() {
   
        return(
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    style={styles.input}
                    autoCapitalize={"characters"}
                    value={this.state.symbol}
                    onChangeText={text => this.setState({ symbol: text })}
                    placeholder="Symbol"
                />
                {/* { !this.state.symbol && <Text style={{color: 'red', paddingBottom: 10}}>symbol field cannot be empty</Text> } */}
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.shares}
                    onChangeText={text => this.setState({ shares: text }) }
                    placeholder="Shares"
                />
                {/* {!this.state.shares && <Text style={{color: 'red', paddingBottom: 10}}>shares field cannot be empty</Text> } */}
                <View style={{paddingTop: 20}}>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={this.validadeForm.bind(this)}>
                        <Text style={styles.appButtonText}>Quote</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

// Front-end view style properties
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    textTop: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    textBottom: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 400,
        textAlign: 'center',
    },
    imageWrapper: {
        height: 500,
        width: 400,
    },
    theImage: {
        width: 300,
        height: 500,
        alignContent: 'center',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
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