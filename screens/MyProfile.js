import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={styles.container}>
                <View style={styles.circle}>

                </View>

            </View>

            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
}

function AboutScreen() {
    return (
        <View>
            <Text>hello welcome</Text>

        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="My Profile" component={HomeScreen} />
            <Stack.Screen name="About " component={AboutScreen} />
        </Stack.Navigator>

    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',


    },
    circle: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'black',
        justifyContent: 'center',
        alignContent: 'center'

    }
})