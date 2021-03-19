import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Footer = props => {
    return (
        <View style={styles.footer}>
            <TextInput 
            placeholder="CREATE FOOTER HEAR"
            style={{letterSpacing:1,width:'80%', borderColor:'#757575', borderWidth:1,padding:10,borderRadius:15,backgroundColor:'white'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
       width:'100%',
       height: '20%',
       //paddingTop:40,
       backgroundColor:'white',
       alignItems:'center',
       justifyContent:'center',
       borderBottomWidth:1,
       borderBottomColor:'#757575',
       marginBottom:0,
    },
    TextInput: {
        color:'black'
    }
});

export default Footer;