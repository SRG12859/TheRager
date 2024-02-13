import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {OrderContext} from '../../contexts/OrderProvider';
import OrderItem from './OrderItem';

const Order = () => {
  const {orderArray}: any = useContext(OrderContext);
  return (
    <ScrollView>
      {orderArray != null &&
      orderArray != undefined &&
      orderArray.length > 0 ? (
        orderArray.map(element => {
          console.log(element);
          return (
            <OrderItem
              key={element.PiD}
              image={element.image}
              text={element.title}
              price={element.price}
              UiD={element.UiD}
              BPiD={element.BPiD}
              PiD={element.PiD}
            />
          );
        })
      ) : (
        <Text
          style={{
            color: '#050505',
            fontWeight: '900',
            fontSize: 23,
            textAlign: 'center',
          }}>
          No Orders
        </Text>
      )}
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({});
