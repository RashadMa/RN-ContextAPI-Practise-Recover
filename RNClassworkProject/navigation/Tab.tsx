import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stack/HomeStack';
import BasketItems from './screens/BasketItems';
const Tab = createBottomTabNavigator();


const TabMain = () => {
      return (
            <Tab.Navigator>
                  <Tab.Screen
                        name='homescreen'
                        component={HomeStack}
                        // options={{
                        //       headerShown: false,
                        // }}
                  />
                  <Tab.Screen
                        name='basketScreen'
                        component={BasketItems}
                        // options={{
                        //       headerShown: false,
                        // }}
                  />
            </Tab.Navigator>
      )
}

export default TabMain

const styles = StyleSheet.create({})