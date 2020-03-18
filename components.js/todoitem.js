import React from 'react';
import { StyleSheet, Text, TouchableOpacity ,Button } from 'react-native';

export default function Todoitem({item, presshandler,navigation}) {
return(
    <TouchableOpacity onPress={()=> presshandler(item.key)}>
        <Text style={styles.item}> {item.text} </Text>
        <Button title="details" onPress={() => navigation.navigate('details')} />
    </TouchableOpacity>
)



}
const styles = StyleSheet.create({
item:{
    paddingHorizontal:10,
    paddingVertical:12,

    marginTop:16,
    borderColor:'#bbb',
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:5
},




})