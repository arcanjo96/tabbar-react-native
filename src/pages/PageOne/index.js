import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Header, Body, FooterTab, Right, Icon, Left } from 'native-base';

export default class PageOne extends Component {
    state = {
        texto: "Oi",
        isLoading: false,
    }

    componentDidMount() {

    }

    render() {
        if(this.state.isLoading) {
            return(
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                <Header>
                    <Left>
                        <Icon 
                            name="home"
                            style={{ color: "#FFF" }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ color: "#FFF", fontSize: 18 }}>Page One</Text>
                    </Body>
                    <Right>
                        
                    </Right>
                </Header>
                <Text>Page1</Text>
            </View>
        );
    }
}