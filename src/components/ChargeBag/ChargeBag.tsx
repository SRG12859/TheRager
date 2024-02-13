import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {BagContext} from '../../contexts/BagProvider';

const ChargeBag = () => {
  const {setRewardPtG, rewardPtG, qrScanData, chargeBag}: any =
    useContext(BagContext);
  // useEffect(() => {
  //   Alert.alert(
  //     String('1L Plastic:100Pt, 500ml: 50Pt, >1l: 200Pt, <1ml: 50Pt'),
  //   );
  // }, []);

  return (
    <SafeAreaView style={styles.SW}>
      <View>
        <Text style={styles.CBT}> - Bag - </Text>
        <Text style={styles.qrScanData}>{qrScanData}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setRewardPtG}
          placeholderTextColor={'#050505'}
          placeholder="Reward Points"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.btnW}>
        <Button
          title="Give Points"
          color="#FF7A00"
          onPress={() => chargeBag()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChargeBag;

const styles = StyleSheet.create({
  SW: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  btnW: {
    padding: 6,
    margin: 10,
  },
  CBT: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
    color: '#050505',
    fontWeight: '900',
    fontSize: 24,
  },
  input: {
    color: '#050505',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  qrScanData: {
    textAlign: 'center',
    padding: 0,
    margin: 10,
    color: '#050505',
    fontWeight: '900',
    fontSize: 16.5,
  },
});
