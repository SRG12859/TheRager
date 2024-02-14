import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.supremeWrapper}>
      <View style={styles.navigationNT}>
        <Text style={styles.welcmText}>Hello, Rager</Text>
      </View>
      <View style={styles.mContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Qr');
          }}>
          <Text style={styles.Link}>Charge Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Order');
          }}>
          <Text style={styles.Link}>Check Orders</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mContent: {
    height: '80%',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  settings: {},
  supremeWrapper: {
    color: '#f5f5f5',
    height: '100%',
  },
  navigationNT: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '15%',
  },
  welcmText: {
    color: '#050505',
    fontSize: 24,
    fontWeight: '900',
  },
  Link: {
    color: '#005382',
    fontWeight: '900',
    fontSize: 30,
  },
});
