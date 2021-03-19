import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const InfoView = (props) => {
    return (
        <View style={styles.infoView}>
           <Text> Create Parking Info</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoView: {
       backgroundColor:'#ffffff',
       display:'flex',
       width:'100%',
       height: '72%',
       alignItems:'center',
       justifyContent:'center',
       borderBottomWidth:1,
       borderBottomColor:'#757575'
    }
});

export default InfoView;