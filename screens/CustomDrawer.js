import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, BackHandler, Alert, Image } from 'react-native'

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.navigation.closeDrawer(), this.props.navigation.navigate('DrawerNavigator') }} style={styles.mainView} ><View style={{ flexDirection: 'row', }}><Image source={require('./assets/image1.png')} style={{ height: 30, width: 40 }} /><Text style={{ marginLeft: 30 }}>Profile</Text></View></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Expenses')} style={styles.mainView} ><View style={{ flexDirection: 'row', }}><Image source={require('./assets/image1.png')} style={{ height: 30, width: 40 }} /><Text style={{ marginLeft: 30 }}>Expenses</Text></View></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Purchases')} style={styles.mainView} ><Text>Sales</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Reports')} style={styles.mainView} ><Text>COURSES</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Sales')} style={styles.mainView} ><Text>CONTACT US</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert('Do you want to Exit ?', '', [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel "),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => BackHandler.exitApp() }
                ],
                    { cancelable: true })
                } style={styles.mainView} ><Text>QUIT</Text></TouchableOpacity>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        width: '100%', padding: 20, borderWidth: 1,
        borderColor: 'grey'
        //borderColor:'rgb(232, 231, 230)'
    }
})