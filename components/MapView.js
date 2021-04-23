import React, { useState,useEffect } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.007,
  longitudeDelta: 0.007,
};
const sortParkings = []
const parkings = []
function AppMap  ({ navigation })  {
  
  const [curentPosition, setCurentPosition] = useState(initialState);
  const [loadedParkings, setLoadedParkings] = useState([]);

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //alert(JSON.stringify(position))
        const { longitude, latitude } = position.coords;
         setCurentPosition({
          ...curentPosition,
          latitude,
          longitude,
        });

        const lat = position.coords.latitude.toString()
        const lon = position.coords.longitude.toString()

        console.log(lat)
        console.log(lon)

          fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data1) => {
          parkings.push(...data1)
        })
        .then(() => {
          fetch("http://data.goteborg.se/ParkingService/v2.1/PrivateTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data2) => {
          parkings.push(...data2)

          parkings.sort((a,b)=>a.CurrentParkingCost - b.CurrentParkingCost)

          const sortPrice=(parkings[0].CurrentParkingCost);
          let sortDistance=(parkings[0].Distance);
          console.log("*************************"+sortPrice)
          


          for (let i = 0; i< parkings.length; i++) {
            
           if (sortPrice === parkings[i].CurrentParkingCost && sortDistance > parkings[i].Distance){
             sortDistance = parkings[i].Distance;
             sortParkings.unshift(parkings[i]);

           }
           sortParkings.push(parkings[i]);
          }

          setLoadedParkings([...sortParkings]) 
        })
        })
      });
      },[]
    )

  return curentPosition.latitude ? (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ flex: 1 }}
      region={curentPosition}
      showsUserLocation={true}
      showsScale={true}
    >
      {loadedParkings.map((parking,index) => {
        console.log(parking)
        return (
          <MapView.Marker
            coordinate={{ latitude: parking.Lat, longitude: parking.Long }}
            key={parking.Id}
            pinColor={"purple"} // any color          
          >
          <View style={{ 
            backgroundColor: index ==0 ?"#550bbc" : "#177cbe",
            padding: index == 0 ? 10 : 5,
            borderRadius: 5,
           }}>
          <Text style={styles.textInfo}>{parking.CurrentParkingCost} kr/tim</Text>
          </View>
            <MapView.Callout style={styles.callout} onPress={() => navigation.navigate("ParkingInfo",parking)}>
                <Text style={{"fontWeight": "bold"}}>{parking.Name + " Nu: " + parking.CurrentParkingCost + "kr/tim"}</Text>
                <Text>{"Total Antal Platser: " + parking.ParkingSpaces}</Text>
                <Text>{"Max tim: " + parking.MaxParkingTime}</Text> 
            </MapView.Callout>
          </MapView.Marker>
        );
      })}
    </MapView>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
};

const styles = StyleSheet.create({
  marker:{
    backgroundColor:'#550bbc',
    padding:5,
    borderRadius:5,
  },
  textInfo:{
    color:'#FFF',
    fontWeight:'bold',
  },
  callout: {
    width: '200%',
  }
})

export default AppMap;