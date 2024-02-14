import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {BagContextType} from './BagContextType';
import axios from 'axios';
import Config from 'react-native-config';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {BURL} from '../../secrets';

export const BagContext = createContext<BagContextType | undefined>(undefined);

export const BagProvider: FC<{children: ReactNode}> = ({children}) => {
  const [qrScanData, setQrScanData] = useState('');
  const [bagGen, setBagGen] = useState('');
  const [rewardPtG, setRewardPtG] = useState(50);
  const Axios = axios.create({
    baseURL: `${BURL}/api/bags`,
    responseType: 'json',
  });
  useEffect(() => {
    console.log(qrScanData);
    return () => {
      console.log(qrScanData);
    };
  }, [qrScanData]);
  const chargeBag = async () => {
    try {
      setRewardPtG(+rewardPtG);
      console.log(qrScanData);
      console.log(rewardPtG);
      let req = await Axios.put('/chargeBags', {
        URI: qrScanData,
        RewardPoint: rewardPtG,
      });

      console.log(req);
      console.log(req.data);
      if (req.data.success === false) {
        Snackbar.show({
          text: String(req.data.text),
          duration: Snackbar.LENGTH_SHORT,
        });
      }
      Snackbar.show({
        text: 'Successfully Charged the bag :)',
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (error: any) {
      Alert.alert(String(error));
      console.log(error.response);
    }
  };
  const createBag = async () => {
    console.log('create bag');
    try {
      let a = await Axios.get('/createBag');
      console.log(a);
      console.log(a.data.UBag.bagsURI);

      setBagGen(a.data.UBag.bagsURI);
    } catch (e) {
      console.log(e);
      console.log(e.response);
    }
  };
  return (
    <BagContext.Provider
      value={{
        setQrScanData,
        chargeBag,
        setRewardPtG,
        rewardPtG,
        qrScanData,
        bagGen,
        createBag,
      }}>
      {children}
    </BagContext.Provider>
  );
};

export default BagProvider;
