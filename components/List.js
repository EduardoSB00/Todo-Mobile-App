import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

export default function List(){

    const [list,setList] = useState([
        {text: "Example", key: 1},
        {text: "Example 2", key: 2},

    ]);

    function handleDelete(item){
        setList((list) => (list.filter((unity)=>(unity.key != item))))
    }

    const [currentKey,setCurrentKey] = useState(3);

    const [newItem,setNewItem] = useState("");

    function handleButtonPress(){

        if(newItem.length > 0){
            setList((list)=>(
                [{text: newItem, key: currentKey},...list]
            ))
            handleUpdateKey();
        } else {
            Alert.alert("This is too Short", "Input must contain text", {text: "Ok"})
        }
    }

    function handleUpdateKey(){
        setCurrentKey((currentKey)=>(currentKey+1))
    }

    return(
        <View>
            <View>
                <TextInput placeholder='new item' onChangeText={(val) => {setNewItem(val)}} style={styles.inputForm}/>
                <View style={styles.btn}>
                    <Button title="submit" onPress={handleButtonPress} color="white"/>                    
                </View>
            </View>
            <FlatList
                data = {list}
                renderItem = {({item}) => (
                    <TouchableOpacity style={styles.textContainer} onPress={()=>{handleDelete(item.key)}}>
                        <Text style={styles.item}>{item.text}</Text>
                        <FontAwesome name="check-square-o" size={24} color="#7F3E9F" />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#DECFFA",
        fontSize: 20,
        marginHorizontal: 15

    },
    textContainer:{
        backgroundColor: "#DECFFA",
        padding: 15,
        borderColor: "#C5ACF6",
        borderStyle: "solid",
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row"
    },
    btn:{
        backgroundColor: "#C5ACF6",
        marginHorizontal: 50,
        marginVertical: 30
    },
    inputForm:{
        height: 30,
        fontSize: 20,
        borderColor: "#C69BDB",
        borderWidth: 2,
        borderStyle: "solid",
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10
    }
    



})