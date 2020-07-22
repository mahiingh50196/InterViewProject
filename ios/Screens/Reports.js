import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../assets/image.jpeg")} style={{ height: 40, width: 30 }} />
                <Text>
                    Tim
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    }
})

