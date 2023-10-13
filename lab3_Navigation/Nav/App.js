import * as React from 'react';
import { View, TouchableOpacity, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Product({ route, navigation }) {
  const selectedImage = route.params?.selectedImage || require('./img/blue.jpg');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F7' }}>
      <Image
        source={selectedImage}
        style={{ width: 350, height: 380, marginBottom: 20 }}
      />
      <View style={{ width: 310 }}>
        <Text style={{ marginBottom: 5, fontSize: 24 }}>iPhone 15 128GB</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 5, width: 320 }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Image
            key={index}
            source={require('./img/star.png')}
            style={{ width: 25, height: 25, marginRight: index < 6 ? 8 : 0 }}
          />
        ))}
        <Text style={{ marginTop: 7 }}>(Watch 169 reviews)</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 15, width: 310 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}>21.999.000 đ</Text>
        <Text style={{ textDecorationLine: 'line-through', fontSize: 16, color: 'gray', marginTop: 3 }}>
          24.990.000 đ
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          width: 350,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          borderWidth: 0.75,
          borderColor: 'black',
        }}
        onPress={() => navigation.navigate('Colors')}
      >
        <Text style={{ color: 'black', fontSize: 16 }}>Choose a color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'red', borderRadius: 10, width: 350, height: 35, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

function Colors({ navigation }) {
  const [image, setImage] = React.useState(require('./img/blue.jpg'));

  const handleColorChange = (newImage) => {
    setImage(newImage);
  };

  const handleDone = () => {
    navigation.navigate('Product', { selectedImage: image });
  };

  return (
    <View style={{ flex: 1, marginTop:20 }}>
      <View style={{ flex: 3, backgroundColor: '#F5F5F7', flexDirection: 'row' }}>
        <Image source={image} style={{ width: 150, height: 150 }} resizeMode='contain' />
        <Text style={{ fontSize: 20 }}>iPhone 15 128GB</Text>
      </View>
      <View style={{ flex: 8, backgroundColor: '#C4C4C4', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 350, height: 50 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Choose a color:</Text>
        </View>
        {[
          { image: require('./img/blue.jpg'), backgroundColor: '#B8E1FF' },
          { image: require('./img/pink.jpg'), backgroundColor: '#FFDCE3' },
          { image: require('./img/yellow.jpg'), backgroundColor: '#FFFFD8' },
          { image: require('./img/green.jpg'), backgroundColor: '#B5EAD7' },
          { image: require('./img/black.jpg'), backgroundColor: '#676064' },
        ].map((color, index) => (
          <Pressable
            key={index}
            onPress={() => handleColorChange(color.image)}
            style={{ width: 50, height: 50, backgroundColor: color.backgroundColor, borderWidth: 1, marginBottom: 5 }}
          ></Pressable>
        ))}
        <TouchableOpacity
          style={{ backgroundColor: 'blue', borderRadius: 10, width: 350, height: 35, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
          onPress={handleDone}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
        <Stack.Screen name="Colors" component={Colors} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
