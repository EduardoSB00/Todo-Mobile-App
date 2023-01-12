import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#9D6FF7",
        paddingTop: 70,
        alignItems: "center",
        height: 140

    },
    title:{
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
    }
})