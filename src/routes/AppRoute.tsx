import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChargeBag from '../components/ChargeBag/ChargeBag';
import CreateBag from '../components/CreateBag/CreateBag';
import Home from '../components/Home/Home';
import Order from '../components/Orders/Order';
import QrScanner from '../components/QrScanner/QrScanner';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ChargeBag" component={ChargeBag} />
      <Stack.Screen name="CreateBag" component={CreateBag} />
      <Stack.Screen name="Qr" component={QrScanner} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default AppRoute;

const styles = StyleSheet.create({});
