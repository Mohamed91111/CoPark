import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { OpenMapDirections } from 'react-native-navigation-directions';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import Icon from '@expo/vector-icons/Ionicons';


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
    <Container style={styles.container}>
      <Content style={styles.content}>
       <Text style={styles.name}><Icon name="pin-outline" size={30} color="#F59300"></Icon>{Name}</Text>  
      <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Body style={styles.body}>
    <ScrollView style={styles.scrollView} >
    <Text style={styles.textInfo}><Icon name="card-outline" size={20} color="#F59300"></Icon> <Text style={styles.textTitle}> Pris Just Nu: </Text>{CurrentParkingCost} kr/tim</Text>
    <Text style={styles.textInfo}><Icon name="locate-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Avstånde: </Text>{Distance} m</Text>
    <Text style={styles.textInfo}><Icon name="phone-portrait-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Phone Code: </Text>{PhoneParkingCode}</Text>
    <Text style={styles.textInfo}><Icon name="car-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Antal Parking Platser: </Text>{ParkingSpaces}</Text>
    <Text style={styles.textInfo}><Icon name="business-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Parkering Unserhålls Av: </Text>{Owner}</Text>
    <Text style={styles.textInfo}><Icon name="cash-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Pris Plain: </Text>{ParkingCost}</Text>
    <Text style={styles.textInfo}><Icon name="time-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Tidsbegränsning: </Text>{MaxParkingTime} {MaxParkingTimeLimitation}</Text>
    <Text style={styles.textInfo}><Icon name="information-outline" size={20} color="#F59300"></Icon>  <Text style={styles.textTitle}>Extra Info: </Text>{ExtraInfo}</Text>
    </ScrollView>
    </Body>
          </CardItem>
        </Card>
        
      </Content>
      
    </Container> 
    <View style={styles.navigation}>
      <TouchableOpacity onPress={navigationTo}>
        <View style={styles.btnNavigation}>
          <Text style={styles.textBtnNavigation}>Navigation</Text>
        </View>
      </TouchableOpacity>
      </View>
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
  container:{
    width:'100%',
  },
  name:{
    
    fontSize:20,
    fontWeight:'bold',
    marginTop:50,
    //textAlign:"center",
    color:"#F59300"
  },
  card:{
    marginBottom:50,
    marginTop:30,
  },
  cardItem:{
    backgroundColor:"#212121"
  },
  body:{
    backgroundColor:"#212121",
  },
  content:{
    backgroundColor:"#212121",
    paddingHorizontal:"5%"
  },
  textInfo: {
    width:'100%',
    paddingVertical:8,
    paddingHorizontal:4,
    color:"#aaaaaa",
    fontSize:12,
    
  },
  btnNavigation: {
    backgroundColor:"#F59300",
    borderWidth:2,
    borderRadius:7,
    shadowColor:'black',
    paddingVertical:'5%', 
    paddingHorizontal:'30%',
    marginVertical:15,
    marginLeft:20,
    marginRight:20
    
  },
  scrollView: {
    width:'100%',
    marginTop: 15,
    
  },
  textTitle: {
    fontWeight:'bold',
    marginLeft:30,
    color:"#F59300",
    fontSize:13,
    
  },
  textBtnNavigation: {
    fontWeight:'bold',
    fontSize:20
  },
  navigation:{
    backgroundColor:"#212121",
    width:"100%"
  }

});

export default ParkingInfo;