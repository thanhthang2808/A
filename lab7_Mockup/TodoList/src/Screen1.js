import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, View, Text, FlatList } from "react-native";

const Screen1 = () => {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
            <Image style={{width:200, height:200, marginBottom:30}} source={require('../assets/task.png')}/>
            <Text style={{fontSize:30, fontWeight:'bold', marginBottom:20}}>MANAGE YOUR TASK</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onChangeText={(value) => { setInput(value) }}
                    style={{borderWidth: 1, height: 50, width: 300, marginBottom:30}} />
            </View>
            <TouchableOpacity style={{fontSize:20, height:40, width: 200, backgroundColor:'#B8E1FF', justifyContent:'center', alignItems:'center'}}>GET STARTED</TouchableOpacity>
        </View>
    )
}
export default Screen1;