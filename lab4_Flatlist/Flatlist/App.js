import React from 'react';
import { View, Image, FlatList, StyleSheet, Text, StatusBar, Button, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'iPhone 15 128GB Blue',
    image: require('./img/blue.jpg'),
    shopName: 'FPT Shop',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'iPhone 15 128GB Black',
    image: require('./img/black.jpg'),
    shopName: 'Di Dong Viet',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'iPhone 15 128GB Green',
    image: require('./img/green.jpg'),
    shopName: 'TGDD',
  },
  {
    id: 'js354a0f-vda1-418f-bd96-14562hdn9d72',
    title: 'iPhone 15 128GB Pink',
    image: require('./img/pink.jpg'),
    shopName: 'TGDD',
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={{ width: 100, height: 100 }} />
    <View>
      <Text>{item.title}</Text>
      <Text>{item.shopName}</Text>
    </View>
    <Button
      title="Chat"
      onPress={() => {
        console.log(item.id);
      }}
    />
  </View>
);

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
