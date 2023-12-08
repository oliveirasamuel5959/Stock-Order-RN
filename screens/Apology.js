/**
 * Import React Components
 */
import React from "react";
import { 
    View,
    Text, 
    StyleSheet, 
    ImageBackground,
    Button
    } from 'react-native';

const logoImg = require('../assets/Grumpy-Cat.jpg') 

export default class Apology extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props.navigation);
        return(
            <View style={styles.imageWrapper}>
                <ImageBackground style={styles.theImage} source={logoImg}>
                    <Text style={styles.textTop}>400</Text>
                    <Text style={styles.textBottom}>{message}</Text>
                </ImageBackground>
                <Button
                    title="Back"
                    onPress={() => this.props.navigation.navigate("Quote")}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
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
})