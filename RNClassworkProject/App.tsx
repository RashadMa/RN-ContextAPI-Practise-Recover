import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabMain from './navigation/Tab';
import { BasketProvider } from './context/BasketContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BasketProvider>
          <TabMain />
        </BasketProvider>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})