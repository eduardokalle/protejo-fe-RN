import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './navigation/Drawer';

export default () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};


/*
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './components/Home';
import Form from './components/Form';
import Services from './components/Services';
import WorkWithUs from './components/WorkWithUs';
import Appointment from './components/Appointment';
import PricePay  from './components/PricePay';
import AboutUs from './components/AboutUs';
import List from './components/List';
import Blog from './components/Blog';

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
              <Drawer.Screen name="Quienes Somos" component={AboutUs} />
              <Drawer.Screen name="Testimonios" component={List} />
              <Drawer.Screen name="Reserva tu Cita" component={Appointment} />
              <Drawer.Screen name="Precios y Pagos" component={PricePay} />
              <Drawer.Screen name="Trabaja con Nosotros" component={WorkWithUs} />
              <Drawer.Screen name="Noticias" component={Blog} />
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
*/