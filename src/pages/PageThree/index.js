import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet, Dimensions } from 'react-native';
import { Header, Body, Left, Right, Icon } from 'native-base';

export default class PageOne extends Component {
    state = {
        step: 1,
        valor: 0
    }

    renderTeste = () => {

    }

    render() {
        return(
            <View>
                <Header>
                    <Left style={{ flex: 1 }}>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#FFF", alignSelf: "center" }}>Login</Text>
                    </Body>
                    <Right style={{ flex: 1 }}></Right>
                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line1: {
        width: Dimensions.get('window').width / 3,
        height: 10,
        backgroundColor: "#000",
    },
    line2: {
        width: Dimensions.get('window').width / 2,
        height: 10,
        backgroundColor: "#000",
    },
    line3: {
        width: Dimensions.get('window').width / 1,
        height: 10,
        backgroundColor: "#000",
    },
    text: {
        color: "white"
    }
});