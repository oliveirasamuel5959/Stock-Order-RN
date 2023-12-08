
export async function lookup() {
    var obj;
    fetch('https://oliveirasamuel5959.github.io/stock-api/db.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            obj = data
        })
        .then(() => {
            console.log(obj.result)
            return {obj}
        })
        .catch(error => console.log("Error", error))

}








































/*import { 
    Text, 
    View, 
    StyleSheet, 
    Button} from 'react-native';

import React from 'react';
import App from './App'
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';


export default class StocksAPI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://oliveirasamuel5959.github.io/stock-api/db.json')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

}*/





/*render() {
    let { isLoaded, items } = this.state

    if (!isLoaded) {
        return <Text>Loading...</Text>
    } else {
        return (
            <View>
                <Text>
                    {JSON.parse(items, (key, value) => {
                        
                    })}
                </Text>
            </View>
        )
    }
}*/