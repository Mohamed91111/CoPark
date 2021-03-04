import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
           <ImageBackground source={require('../assets/headerLogo.png')} style={styles.backgroundImage} >
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
       display:'flex',
       width:'100%',
       height: '13%',
       paddingTop:20,
       alignItems:'center',
       justifyContent:'center',
       borderBottomWidth:1,
       borderBottomColor:'#757575'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});

export default Header;