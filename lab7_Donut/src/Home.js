import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, View, Text, FlatList } from "react-native";
import ItemProduct from "./ItemProduct";
const Home = () => {
    const [input, setInput] = useState('');
    console.log(input);
    var [dt, setDT] = useState([])
    var data = [];
    useEffect(() => {
    fetch('https://653f261d9e8bd3be29e000fc.mockapi.io/Donutdata')
        .then(response => response.json())
        .then(json =>{
            setDT(json);
        });
    }, []);
    

    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome, Jala!</Text>
            <Text>Choice you Best food</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onChangeText={(value) => { setInput(value) }}
                    style={{
                        borderWidth: 1,
                        height: 55,
                        width: '85%'
                    }} />
                <TouchableOpacity >
                    <Image source={require('../assets/img/ser.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
            <View>
                {dt.map((item) => {
                    return (
                    //     <FlatList
                    // dt={product.filter(i => i.name.toLowerCase().includes(input.toLowerCase()))}
                    // renderItem={({ item }) =>
                        <ItemProduct
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />
                //     }
                // />
                    )
                })}
            </View>
        </View>
    )
}
export default Home;