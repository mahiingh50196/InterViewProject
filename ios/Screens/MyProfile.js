import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class MyProfile extends Component {
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
                <View style={styles.circle}>

                </View>

                <View>

                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'row',

    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
    }
})
