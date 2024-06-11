import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator()  

import AppList from './AppList';
import AppForm from './AppForm';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d",
                    tabBarInactiveTintColor: "#c1bccc",
                    tabBarActiveBackgroundColor: "#ebebf5",
                    tabBarInactiveBackgroundColor: "#fafafc",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: { display: "none" }
                }}
            >
                <Screen name="AppList" component={AppList} 
                options={{
                    tabBarLabel:"Compras"
                }}/>
                <Screen name="AppForm" component={AppForm}
                options={{
                    tabBarLabel:"Adicionar"
                }} />
                <Stack.Screen name="Imagem" 
                getComponent={() => require('./Imagem').default}
                options={{
                    headerLeft: null
                }} />
                
            </Navigator>
            
        </NavigationContainer>
        //</>
    );
}

export default AppTab;