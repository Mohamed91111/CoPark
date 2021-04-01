import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,  } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const ParkingInfo = ({route,navigation}) => {
 const {PhoneParkingCode, Name, CurrentParkingCost, Distance, ParkingSpaces, Owner, ParkingCost, ExtraInfo, MaxParkingTimeLimitation, MaxParkingTime} = route.params;

 const navigationTo = ()=>{
   console.log('ok')
 }
 
  return (
    <View style={styles.center}>
     
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="map-pin" size={30} color="gray" /> Namn eller Gatan: {Name}</Text>
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="credit-card-alt" size={30} color="gray" /> Pris Just Nu:{CurrentParkingCost}</Text>
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="map-signs" size={30} color="gray" /> Avstånde:{Distance}</Text>
      <Text style={{ width:'95%',borderWidth:1,padding:10}}><FontAwesome name="tablet" size={30} color="gray" /> Phone Code:{PhoneParkingCode}</Text>
      <Text style={{ width:'95%',borderWidth:1,padding:10}}><FontAwesome name="automobile" size={30} color="gray" /> Antal Parking Platser:{ParkingSpaces}</Text>
      <Text style={{ width:'95%',borderWidth:1,padding:10}}><FontAwesome name="institution" size={30} color="gray" /> Parkering Unserhålls Av:{Owner}</Text>
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="question" size={30} color="gray" /> Pris Plain:{ParkingCost}</Text>
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="clock-o" size={30} color="gray" /> Tidsbegränsning:{MaxParkingTime} {MaxParkingTimeLimitation}</Text>
      <Text style={{width:'95%',borderWidth:1,padding:10}}><FontAwesome name="info" size={30} color="gray" /> Extra Info:{ExtraInfo}</Text>
      <TouchableOpacity onPress={navigationTo}>
        <View style={{width:'95%',borderWidth:1,paddingVertical:20, paddingHorizontal:100,marginTop:30}}>
          <Text>Navigation</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default ParkingInfo;