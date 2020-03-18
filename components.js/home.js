import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
//import Home from './components.js/home.js';
import Todoitem from '../components.js/todoitem.js';
import AddTodo from '../components.js/AddTodo.js'




export default function Home({navigation}) {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'read a book', key: '2' },
        { text: 'go out', key: '3' },
    
    
      ]);
      const presshandler = (key) => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.key != key);
    
        })
      }
    
      const submitHandler = (text) => {
        setTodos((prevTodos) => [
          { text: text, key: Math.random().toString() }, ...prevTodos]
        )
      }
    

return(
  <View style={styles.container}>
    
    
    <Text style={styles.title}>My todos</Text>
  
    
       
      
      
  
  
        
      <View style={styles.content}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      
      <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
                          <Todoitem item={item} presshandler={presshandler } navigation={navigation}
                          />
           )}

           />

        </View>
      </View>
  </View>
  
);
}
const styles = StyleSheet.create({
header:{
    height:80,
    width:410,
    padding:40,
    backgroundColor:'coral',
    marginBottom:10,

},
title:{
    textAlign:'center',
    color:'black',
    fontSize:30,
    fontWeight :'bold',

},
container: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
},
text1: {
  color: 'black',
  fontSize: 20,
},
content: {
  padding: 40,
  marginTop: 50

},
list: {
  marginTop: 50
},




});