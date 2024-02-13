import {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {RewardContextType} from './RewardContextType';
import axios from 'axios';
import Config from 'react-native-config';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import {NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';
export const RewardContext = createContext<RewardContextType | undefined>(
  undefined,
);
const BURL: string = Config.BURL!;
const Axios = axios.create({
  baseURL: `http://192.168.1.104:5000/api/rewards`,
  responseType: 'json',
});

export const RewardProvider: FC<{children: ReactNode}> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');
  const [rewardItems, setRewardItems]: any = useState([]);
  const [id, setId] = useState('');
  const [UiD, setUiD] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const fetchReward = async () => {
    try {
      setIsLoading(true);
      let req = await Axios.get('/fetch');
      // console.log(req.data[0].image);

      setRewardItems(req.data);
      setIsLoading(false);
      console.log(rewardItems);
    } catch (error) {
      setIsLoading(true);
      Snackbar.show({
        text: 'ERROR, PLEASE CO-OPERATE!',
        duration: Snackbar.LENGTH_LONG,
      });
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReward();
    console.log(rewardItems);
  }, []);

  return (
    <RewardContext.Provider value={{rewardItems, isLoading}}>
      {children}
    </RewardContext.Provider>
  );
};
