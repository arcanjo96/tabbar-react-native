import React from 'react';
import { createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';

//pages
import Page1 from './pages/PageOne';
import Page2 from './pages/PageTwo';
import Page3 from './pages/PageThree';
import Page4 from './pages/PageFour';

const AppNavigator = createStackNavigator({
    /*Page1: {
        screen: Page1,
        navigationOptions: {
            header: null
        },
    },
    Page2,*/
    Page4
});

export default createAppContainer(AppNavigator);