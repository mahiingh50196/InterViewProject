import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RootStack = createStackNavigator()
const DrawerStack = createDrawerNavigator();

import MyProfile from './screens/MyProfile';
import Expenses from './screens/Expenses';
import Purchases from './screens/Purchases';
import Reports from './screens/Reports';
import Sales from './screens/Sales';
import CustomDrawer from './screens/CustomDrawer';

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      drawerStyle={{ width: '80%' }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerStack.Screen name="MyProfile" component={MyProfile} />
      <DrawerStack.Screen name="Expenses" component={Expenses} />
      <DrawerStack.Screen name="Purchases" component={Purchases} />
      <DrawerStack.Screen name="Reports" component={Reports} />
      <DrawerStack.Screen name="Sales" component={Sales} />

    </DrawerStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="DrawerNavigator" headerMode='none'>
        <RootStack.Screen name='DrawerNavigator' component={DrawerNavigator} />

      </RootStack.Navigator>
    </NavigationContainer>

  );
}

export default App;
