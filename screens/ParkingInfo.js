import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { OpenMapDirections } from 'react-native-navigation-directions';

const ParkingInfo = ({route,navigation}) => {
 const {PhoneParkingCode, Name, CurrentParkingCost, Distance, ParkingSpaces, Owner, ParkingCost, ExtraInfo, MaxParkingTimeLimitation, MaxParkingTime, Lat, Long} = route.params;

 const navigationTo = ()=>{
  const startPoint = null;
  const endPoint = {latitude: Lat, longitude: Long}
  const transportPlan = 'd';
  OpenMapDirections(startPoint, endPoint, transportPlan);
 }
 
  return (
    <View style={styles.center}>
     <ScrollView style={styles.scrollView} >
      <Text style={styles.textInfo}><FontAwesome name="map-pin" size={30} color="#f59300" /> <Text style={styles.textTitle}>Namn eller Gatan:</Text> {Name}</Text>
      <Text style={styles.textInfo}><FontAwesome name="credit-card-alt" size={30} color="#f59300" /> <Text style={styles.textTitle}> Pris Just Nu: </Text>{CurrentParkingCost} kr/tim</Text>
      <Text style={styles.textInfo}><FontAwesome name="map-signs" size={30} color="#f59300" /> <Text style={styles.textTitle}>Avstånde: </Text>{Distance} m</Text>
      <Text style={styles.textInfo}><FontAwesome name="tablet" size={30} color="#f59300" /> <Text style={styles.textTitle}>Phone Code: </Text>{PhoneParkingCode}</Text>
      <Text style={styles.textInfo}><FontAwesome name="automobile" size={30} color="#f59300" /> <Text style={styles.textTitle}>Antal Parking Platser: </Text>{ParkingSpaces}</Text>
      <Text style={styles.textInfo}><FontAwesome name="institution" size={30} color="#f59300" /> <Text style={styles.textTitle}>Parkering Unserhålls Av: </Text>{Owner}</Text>
      <Text style={styles.textInfo}><FontAwesome name="question" size={30} color="#f59300" /> <Text style={styles.textTitle}>Pris Plain: </Text>{ParkingCost}</Text>
      <Text style={styles.textInfo}><FontAwesome name="clock-o" size={30} color="#f59300" /> <Text style={styles.textTitle}>Tidsbegränsning: </Text>{MaxParkingTime} {MaxParkingTimeLimitation}</Text>
      <Text style={styles.textInfo}><FontAwesome name="info" size={30} color="#f59300" /> <Text style={styles.textTitle}>Extra Info: </Text>{ExtraInfo}</Text>
      </ScrollView> 
      <TouchableOpacity onPress={navigationTo}>
        <View style={styles.btnNavigation}>
          <Text style={styles.textBtnNavigation}><FontAwesome name="road" size={30} color="#212121" /> Navigation</Text>
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
    backgroundColor:'#212121',
  },
  textInfo: {
    width:'100%',
    paddingVertical:8,
    paddingHorizontal:4,
    fontSize:15,
    color:'#aaa'
  },
  btnNavigation: {
    width:'90%',
    borderWidth:2,
    borderRadius:7,
    shadowColor:'black',
    paddingVertical:'5%', 
    paddingHorizontal:'25%',
    marginVertical:15,
    backgroundColor:'#f59300'
  },
  scrollView: {
    width:'90%',
    marginTop: 15,
    backgroundColor:'#212121',
  },
  textTitle: {
    fontWeight:'bold',
    color:'#f59300'
  },
  textBtnNavigation: {
    fontWeight:'bold',
    fontSize:20,
    color:'#212121'
  }

});

export default ParkingInfo;