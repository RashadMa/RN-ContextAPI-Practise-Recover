import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
      return (
            <Stack.Navigator>
                  <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                              headerShown: false,
                        }} />
                  <Stack.Screen
                        options={{ headerShown: false }}
                        name="ProductDetail"
                        component={ProductDetail} />
            </Stack.Navigator>
      )
}

export default HomeStack

const styles = StyleSheet.create({})