import React, { useState,useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};
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

        console.log("My latitude is ",lat)
        console.log("My longitude is ",lon)
        
        fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTimeParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data1) => {
          parkings.push(...data1)
          console.log("Public Time Parkings is ",data1);
         // setLoadedParkings([...data1])
        });
        fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data2) => {
          parkings.push(...data2)
          console.log("Public Toll Parkings is ",data2);
          //setLoadedParkings([...data2])
        });
        fetch("http://data.goteborg.se/ParkingService/v2.1/PrivateTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data3) => {
          parkings.push(...data3)
          console.log("Private Toll Parkings is ",data3);
          setLoadedParkings([...parkings])
          
        });        
        fetch("http://data.goteborg.se/ParkingService/v2.1/HandicapParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data4) => {
          parkings.push(...data4)
          console.log("Handicap Parkings is ",data4);
          //setLoadedParkings([...data2])
        });
        fetch("http://data.goteborg.se/ParkingService/v2.1/PublicPayMachines/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data5) => {
          parkings.push(...data5)
          console.log("Public Pay Machines is ",data5);
          setLoadedParkings([...parkings])
          
        });
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
      {loadedParkings.map((parking) => {
        return (
          <MapView.Marker
            coordinate={{ latitude: parking.Lat, longitude: parking.Long }}
            key={parking.Id}
            pinColor={"purple"} // any color
          >
            <MapView.Callout onPress={() => navigation.navigate("ParkingInfo")}>
                <Text style={{"fontWeight": "bold"}}>{parking.Name + " Nu: " + parking.CurrentParkingCost + "kr/tim"}</Text>
                <Text>{"Tptal Antal Platser: " + parking.ParkingSpaces}</Text>
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

export default AppMap;
/*
Promise.all([
  fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTimeParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json"),
  fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json"),
  fetch("http://data.goteborg.se/ParkingService/v2.1/PrivateTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
  ])
  */