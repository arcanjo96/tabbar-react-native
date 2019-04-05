import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Header, Right, Left, Icon, Body } from 'native-base';

export default class PageTwo extends Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon 
                            name="camera"
                            style={{ color: "#FFF" }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ color: "#FFF", fontSize: 18 }}>Page Two</Text>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Text>Page 2</Text>
            </View>
        );
    }
}