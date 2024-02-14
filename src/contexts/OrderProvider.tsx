import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {OrderContextType} from './OrderContextType';
import axios from 'axios';
import Config from 'react-native-config';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import {Alert, NativeEventEmitter, NativeModules} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {BURL} from '../../secrets';

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);
const Axios = axios.create({
  baseURL: `${BURL}/api/orders`,
  responseType: 'json',
});

export const OrderProvider: FC<{children: ReactNode}> = ({children}) => {
  const [orderArray, setOrderArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fulfillOrder = async (PiD: string) => {
    try {
      let req = await Axios({
        method: 'delete',
        url: '/fulfilOrder',
        data: {
          PiD,
        },
      });

      Snackbar.show({
        text: 'Order Fulfilled',
        duration: Snackbar.LENGTH_SHORT,
      });

      fetchOrderAll();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
  let fetchOrderAll = async () => {
    try {
      setIsLoading(true);
      let req = await Axios.get('/fetchOrder');
      setOrderArray(req.data.orderedItems);
      console.log(req.data);
      console.log(orderArray);
      Snackbar.show({
        text: 'Fetched All Orders',
        duration: Snackbar.LENGTH_SHORT,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
      Alert.alert(String(error));
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchOrderAll();
  }, []);

  return (
    <OrderContext.Provider
      value={{orderArray, fetchOrderAll, isLoading, fulfillOrder}}>
      {children}
    </OrderContext.Provider>
  );
};
