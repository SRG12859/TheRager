import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/components/Home/Home';
import {BagProvider} from './src/contexts/BagProvider';
import {OrderProvider} from './src/contexts/OrderProvider';
import {RewardProvider} from './src/contexts/RewardProvider';
import AppRoute from './src/routes/AppRoute';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <BagProvider>
      <OrderProvider>
        <NavigationContainer>
          <AppRoute />
        </NavigationContainer>
      </OrderProvider>
    </BagProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
