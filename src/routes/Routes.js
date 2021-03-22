import React from 'react';
import Home from '../components/Home.js';
import Setting from '../components/Setting';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LevelsContainer from '../components/Levels/LevelsContainer';
import LevelContainer from '../components/Level/LevelContainer';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'My First Game',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{
                    title: 'Настройки',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="Levels"
                component={LevelsContainer}
                options={{
                    title: 'Уровни',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="Level"
                component={LevelContainer}
                options={{
                    title: 'Уровень 1',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);
export default Routes;
