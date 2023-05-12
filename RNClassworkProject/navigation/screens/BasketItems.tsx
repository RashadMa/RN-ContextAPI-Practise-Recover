import { StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const BasketItems = () => {
      let { basket, setBasket } = useContext(BasketContext)

      const increaseCount = (item: any) => {
            let basketControl = basket.find((x) => x.id === item.id);
            if (basketControl) {
                  basketControl.count++;
                  setBasket([...basket])
            }
      }
      const decreaseCount = (item: any) => {
            let basketControl = basket.find((x) => x.id === item.id);
            if (basketControl.count >= 1) {
                  basketControl.count--;
                  setBasket([...basket])
            }
      }
      
const deleteAll = (item: any) => {
      let newBasket: any = basket.filter((pr: any) => pr.id !== item.id)
            setBasket([...newBasket]) 
}
      const renderItem = ({ item }: any) => {
            return < >
                  <View style={styles.productCard}>
                        <View >
                              <Text>Title: {item.title}</Text>
                        </View>
                        <View>
                              <Text>Category: {item.category}</Text>
                        </View>
                        <View style={styles.productPriceWrapper}>
                              <Text style={styles.productPrice}>Price: $ {item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => increaseCount(item)}>
                              <Text>+</Text>
                        </TouchableOpacity>
                        <Text>Count: {item.count}</Text>
                        <TouchableOpacity onPress={() => decreaseCount(item)}>
                              <Text>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteAll(item)}>
                              <Text>Delete All</Text>
                        </TouchableOpacity>
                  </View>
            </>
      }
      return (
            <>
                  <SafeAreaView>
                        {
                              <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    data={basket}
                                    renderItem={renderItem}
                                    ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
                              />
                        }
                  </SafeAreaView>

            </>
      )
}

export default BasketItems

const styles = StyleSheet.create({
      conteiner: {
            flex: 1,
            margin: 20
      },
      productCard: {
            backgroundColor: "#fff"
      },
      productPriceWrapper: {},
      productPrice: {},
      cardWrapper: {},
      our: {
            fontSize: 30,
      },
      prdcts: {
            fontSize: 30,
            fontWeight: "bold"
      },
      headerWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
      },
      sectionWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
      },
      section: {
            width: 90,
            backgroundColor: "#d0d0d0",
            textAlign: "center",
            fontSize: 18,
            height: 30,
            borderRadius: 20,
      }
})