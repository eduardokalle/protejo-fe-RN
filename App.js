import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert , Link, Image } from 'react-native';
import Home from './components/Home';
import Form from './components/Form';
import Services from './components/Services';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
        <View style={ styles.containerApp}>
         <NavigationContainer>
           <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Servicios" component={Services} />
              <Drawer.Screen name="Contacto" component={Form} />
           </Drawer.Navigator>
         </NavigationContainer>
        </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#013862',
    paddingLeft: 0,
    paddingRight:0,
  },
});