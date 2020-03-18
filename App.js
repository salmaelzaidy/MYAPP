
// In App.js in a new project
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './components.js/home.js';
import details from './components.js/details.js';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Details" component={details} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './components.js/home.js';
//import details from './components.js/details.js';


export  function details({navigation}) {

  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>details screen </Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
  
  )}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Details" component={details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/





/*import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';
import Home from './components.js/home.js';
import Todoitem from './components.js/todoitem.js';
import AddTodo from './components.js/AddTodo.js'









export default function App() {
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


  return (
    
  
    <View style={styles.container}>
       
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
                          <Todoitem item={item} presshandler={presshandler}/>
           )}

          />

        </View>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  list: {
    marginTop: 20
  },
  /* header:{
     height:80,
     paddingTop:38,
     backgroundColor:'coral' 
 
 },

})*/