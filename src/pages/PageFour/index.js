import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TabBar from '@mindinventory/react-native-tab-bar-interaction';
import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';

export default class PageFour extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <TabBar>
                <TabBar.Item
                    icon={require('../../img/home.png')}
                    selectedIcon={require('../../img/home.png')}
                    title="Tab1"
                    //screenBackgroundColor={{ backgroundColor: '#008080' }}
                >
                    <View style={{flex: 1}}>
                        <PageOne />
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../../img/photo-camera.png')}
                    selectedIcon={require('../../img/photo-camera.png')}
                    title="Tab2"
                   // screenBackgroundColor={{ backgroundColor: '#F08080' }}
                >
                    <View style={{ flex: 1 }}>
                        <PageTwo />
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../../img/account.png')}
                    selectedIcon={require('../../img/account.png')}
                    title="Tab3"
                    //screenBackgroundColor={{ backgroundColor: '#485d72' }}
                >
                    <View style={{ flex: 1 }}>
                        <PageThree />
                    </View>
                </TabBar.Item>
            </TabBar>
        );
    }
}