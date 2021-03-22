import React, { useState,useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

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

        fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTimeParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+lat+"&longitude="+lon+"&radius=600&format=json")
        .then((response) => {
          return response.json()
        })
        .then((data) => {
    
          setLoadedParkings([...data])
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
