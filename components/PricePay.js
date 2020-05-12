import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Button, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Social from './Social';

function PricePay (props) {

  return (
      <>
        <View style={styles.vheader}>
        </View>
          <Social/>  
        <View style={styles.container}>
          <ImageBackground
              source={require("../assets/images/Payment.png")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
          >
              <View style={styles.overlay}>
              <Text style={styles.scienceChannel}>Precios y Pagos </Text>
              <View style={styles.following}>
                <View style={styles.vbtn}> 
                  <Icon.Button name="cc-mastercard" onPress={() => {
                                            Linking.openURL('');
                                        }} solid>
                        Pagos en linea 
                  </Icon.Button>
                </View> 
              </View>
              <Text style={styles.followers}>Conectamos posibilidades para cumplir sueños</Text>
              </View>
          </ImageBackground>
        </View>
        <View >
            
        </View>

      </>    
);
}

const styles = StyleSheet.create({
container: {
  width: 400,
  height: 246,
  overflow: "hidden"
},
image: {
  flex: 1
},
image_imageStyle: {},
overlay: {
  backgroundColor: "rgba(30,26,26,0.4)",
  flex: 1
},
scienceChannel: {
  color: "rgba(255,255,255,1)",
  fontSize: 24,
  marginTop: 43,
  alignSelf: "center"
},
following: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  position: 'relative',
  bottom: -20,
},
space: { 
  height: 30,
  backgroundColor: "#fff",
  
  },
text: {
  color: "rgba(31,178,204,1)",
  fontSize: 14,
  alignSelf: "center"
},
followers: {
  color: "rgba(255,255,255,1)",
  fontSize: 16,
  marginTop: 39,
  alignSelf: "center"
},

vheader : {
  width: 'auto',
  height: 75,
  backgroundColor : '#007aff',
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
},  
vbtn: {
  marginRight: 10,
},
});

export default PricePay;
