import React from "react";
import { Text, View, StyleSheet, Image} from 'react-native';
import LoginScreen from "./LoginScreen";

const logoImg = require('../assets/favicon-3.png')

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    renderRow() {
        console.log(result)
        return (
                <View style={styles.container}>
                    <Text style={styles.text}>Company Name: <Text style={{fontWeight: 'normal'}}>{result['symbolName']}</Text></Text>
                    <Text style={styles.text}>Symbol: <Text style={{fontWeight: 'normal'}}>{result['symbol']}</Text></Text>
                    <Text style={styles.text}>Shares: <Text style={{fontWeight: 'normal'}}>{result['shares']}</Text></Text>
                    <Text style={styles.text}>Price per share: <Text style={{fontWeight: 'normal'}}>${result['price']}</Text></Text>
                    <Text style={styles.text}>Total: <Text style={{fontWeight: 'normal'}}>${result['totalPrice']}</Text></Text>
                </View>
        )
    }

    render() {
        const data = [1]

        return (
            <View style={{ flex: 1, paddingBottom: 10}}>
                <Text style={styles.textHeader}>
                    <Text style={styles.message}>{result["name"]}</Text>
                </Text>
                <Image source={logoImg} style={styles.image} />
                {
                    data.map((datum) => { // This will render a row for each data element.
                            return this.renderRow();
                        })
                }
            </View>
        );
    }
}

export default class HomeScreen extends React.Component {
    constructor(props, navigation) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        if(this.state.isLoggedIn) {
            return <LoginScreen isLoggedIn={false}/>
        } else {
            return <Dashboard />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'left',
        fontSize: 20,
        backgroundColor: '#e8e5dc',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
    message: {
        color: 'green',
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 30,
        padding: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 60,
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'center',
        paddingBottom: 20,
        color: 'blue',
    },
})
