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

export const BagContext = createContext<BagContextType | undefined>(undefined);
const BURL: string = Config.BURL!;
const Axios = axios.create({
  baseURL: `http://192.168.1.104:5000/api/bags`,
  responseType: 'json',
});
export const BagProvider: FC<{children: ReactNode}> = ({children}) => {
  const [qrScanData, setQrScanData] = useState('');
  const [rewardPtG, setRewardPtG] = useState(50);
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
      Snackbar.show({
        text: 'Successfully Charged the bag :)',
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (error: any) {
      Alert.alert(String(error));
      console.log(error.response);
    }
  };
  return (
    <BagContext.Provider
      value={{setQrScanData, chargeBag, setRewardPtG, rewardPtG, qrScanData}}>
      {children}
    </BagContext.Provider>
  );
};

export default BagProvider;
