import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-native-paper';
import { BasketContext } from '../../context/BasketContext';

const ProductDetail = ({ route }: any) => {
      const [detail, setDetail] = useState<any>({})
      let { basket, setBasket } = useContext(BasketContext)
      const increaseCount = (item: any) => {
            detail.count++;
            setBasket([...basket])
      }
      const decreaseCount = (item: any) => {
            if (detail.count >= 2) {
                  detail.count--;
            }
            setBasket([...basket])
      }
      let { id } = route.params;
      useEffect(() => {
            axios.get("https://645d37cbe01ac610589fecda.mockapi.io/products/" + id)
                  .then(res => {
                        setDetail(res.data);
                  })
      }, [])

      const addToBasket = (item: any) => {
            let basketControl = basket.find((x) => x.id === item.id);
            if (!basketControl) {
                  setBasket([...basket, item])
            }
            else {
                  basketControl.count++;
                  setBasket([...basket])
            }
            console.log(basket, 'basket');
      }
      console.log(detail.count, 'detail.count');

      return (
            <SafeAreaView>
                  <Text>Title: {detail.title}</Text>
                  <Text>Desc: {detail.description}</Text>
                  <Text>Price: {detail.price}</Text>
                  <Text>Category: {detail.category}</Text>
                  <TouchableOpacity onPress={() => increaseCount(detail)}>
                        <Text>+</Text>
                  </TouchableOpacity>
                  <Text>Count: {detail.count}</Text>
                  <TouchableOpacity onPress={() => decreaseCount(detail)}>
                        <Text>-</Text>
                  </TouchableOpacity>
                  <Button onPress={() => addToBasket(detail)}>Add to basket</Button>
            </SafeAreaView>
      )
}

export default ProductDetail

const styles = StyleSheet.create({})