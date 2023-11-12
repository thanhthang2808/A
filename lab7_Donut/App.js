import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import ItemProduct from './src/ItemProduct';
import ProductInfo from './src/ProductInfo';
const Stack = createNativeStackNavigator()
export default function App() {
  console.log(Stack);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
