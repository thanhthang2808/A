import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Counter from "./redux/counter";

export default function App() {
  var [count,setCount]= useState(0);
  return <Provider store={store}>
    <Counter/>
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
