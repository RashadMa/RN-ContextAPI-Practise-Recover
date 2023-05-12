import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BasketContext } from '../../context/BasketContext'

const HomeScreen = ({ navigation }: any) => {
      const [products, setProducts] = useState([])

      useEffect(() => {
            axios.get('https://645d37cbe01ac610589fecda.mockapi.io/products').then(res => {
                  setProducts(res.data)
            })
      }, [])
      const renderItem = ({ item }: any) => {
            return <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { id: item.id })} style={{ width: 200 }} >
                  <View style={styles.productCard}>
                        <View >
                              <Text>{item.title}</Text>
                        </View>
                        <View>
                              <Text>{item.category}</Text>
                        </View>
                        <View style={styles.productPriceWrapper}>
                              <Text style={styles.productPrice}>$ {item.price}</Text>
                        </View>
                  </View>
            </TouchableOpacity>
      }

      return (
            <>
                  <SafeAreaView style={styles.conteiner}>
                        <View style={styles.headerWrapper}>
                              <View>
                                    <Text style={styles.our}>Our</Text>
                                    <Text style={styles.prdcts}>Products</Text>
                              </View>
                              <Text>
                                    Search
                              </Text>
                        </View>
                        <View style={styles.sectionWrapper}>
                              <Text style={styles.section}>
                                    Popular
                              </Text>
                              <Text>
                                    Top rated
                              </Text>
                              <Text>
                                    New collection
                              </Text>
                        </View>
                        <View style={styles.cardWrapper}>
                              {
                                    <FlatList
                                          showsHorizontalScrollIndicator={false}
                                          horizontal={true}
                                          data={products}
                                          renderItem={renderItem}
                                          ItemSeparatorComponent={() => <View style={{ width: 50 }} />}
                                    />
                              }
                        </View>
                  </SafeAreaView></>
      )
}

export default HomeScreen

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