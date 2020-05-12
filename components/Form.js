import * as React from 'react';
import { Text, 
         View, 
         StyleSheet,  
         TextInput, 
         Button,
         Alert 
         } from 'react-native';

export default function  Form () {

    /*
    createAlert = () =>
    
        Alert.alert(
                "Te informamos",
                "Que tu registro fue enviado",
                [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }

            
                ingresra en el button
                onPress={this.createAlert}
                
        );*/
    

       return(
              <>
                <View style={ styles.vreform }> 
                    <View style={ styles.reform }>
                        <Text style={ styles.header}> 
                            Contacta con Nosotros
                        </Text>
                        <TextInput style = {styles.textinputF} placeholder='Tu Nombre'
                                placeholderTextColor = "#fff"
                                underlineColorAndroid={'transparent'}
                        />
                        <TextInput style = {styles.textinputF} placeholder='Tu Apellido'
                                placeholderTextColor = "#fff" 
                                underlineColorAndroid={'transparent'}
                        />  
                        <TextInput  style = {styles.textinputF} placeholder='Tu Email'
                                keyboardType={'email-address'}
                                placeholderTextColor = "#fff"
                                secureTextEntry={false}  underlineColorAndroid={'transparent'}  
                        /> 
                        <TextInput  style = {styles.textinputF} placeholder='Tu telefono'
                                keyboardType={'phone-pad'}
                                placeholderTextColor = "#fff"
                                secureTextEntry={false}  underlineColorAndroid={'transparent'}
                        /> 
                         <TextInput  style = {styles.textinputT} placeholder='Mensaje'
                                multiline={true}
                                numberOfLines={3}
                                placeholderTextColor = "#fff"
                                underlineColorAndroid={'transparent'}
                        /> 
                        <View style={ styles.button }>
                            <Button 
                                title="     Enviar      "
                            
                            />
                        </View> 
                    </View>
                </View>
              </>
       );
}

const styles = StyleSheet.create({
    vreform: {
        flex: 1,
        alignSelf :'stretch',
        backgroundColor : '#013862',
        color : '#fff',
        //marginLeft: '5%',
    },
    reform: {
        top: 70,
        flex: 1,
        alignSelf :'stretch',
        backgroundColor : '#013862',
        color : '#fff',
        //marginLeft: '5%',
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingTop: 40,
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#36E8C0',
        borderBottomWidth:1,
        marginLeft: '10%',
        marginRight : '10%',
        alignSelf: "center",
    },
    textinputF :{
        alignSelf :'stretch',
        color: '#fff',
        height:40,
        marginBottom:40,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        backgroundColor: '#013862',
        marginLeft: '10%',
        marginRight : '10%'
    },
    textinputT :{
        alignSelf :'stretch',
        color: '#fff',
        height:60,
        marginBottom:60,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        backgroundColor: '#013862',
        marginLeft: '10%',
        marginRight : '10%'
    },
    button:{
       // alignSelf :'center',
        alignSelf :'flex-end',
        alignItems: 'center',
        padding: 0,
        backgroundColor:'#59cbbd',
        paddingRight: 0,
        marginBottom: 180,
        marginRight :'10%'
        
        
    },
     textb:{
        color: '#fff',
        fontWeight : 'bold'
    },
});