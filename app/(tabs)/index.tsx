// import HomeScreen from './home-screen';
// export default HomeScreen;

import { View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Appbar } from 'react-native-paper';

const app = () => {
  return (
    <>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Recipe App" />
      <Appbar.Action icon="contacts" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>

    <View style = {styles.container}>
      <Text style = {styles.title}>Recipe App</Text>

      <Link style = {{marginHorizontal: 'auto'}} href="/appbar" 
      asChild>
      <Pressable style = {styles.button}>
        <Text style = {styles.buttonText}>Recipes</Text>
      </Pressable>
      </Link>
    </View>
    </>
  )
}

export default app

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  image: { 
    width: '100%', 
    height: '100%', 
    flex: 1, 
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: { 
    color: 'white', 
    fontSize: 42,
    fontWeight: 'bold', 
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: { 
    color: 'white', 
    fontSize: 42,
    fontWeight: 'bold', 
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'underline',
    padding: 4,
  },
  button: { 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: 'rgba(60, 5, 5, 0.75)',
    justifyContent: 'center',
    padding: 6,
    marginBottom: 10,
  },
  buttonText: { 
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold', 
    textAlign: 'center',
    padding: 4,

  }
})