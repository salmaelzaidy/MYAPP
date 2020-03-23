import React from 'react';
import { StyleSheet, Text, View , } from 'react-native';


export default function details({navigation}) {
     //save and set inputs
     const [text,settext]=useState('');
     //track input field
         const changehandler =(val)=>{
     settext(val);}
     

return(
    <View style={styles.header}>
        <Text style={styles.title}>details screen </Text>
    </View>

)}
const styles = StyleSheet.create({
});