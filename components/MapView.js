import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

function AppMap  ({ navigation })  {
  state = {
    parkings: [
      {
        Id: "",
        Name: "",
        Owner: "",
        ParkingSpaces: 0,
        PhoneParkingCode: "",
        ParkingCost: "",
        ParkingCharge: "",
        CurrentParkingCost: 0,
        MaxParkingTime: "",
        MaxParkingTimeLimitation:
          "",
        ExtraInfo: "",
        Distance: 0,
        Lat: 0,
        Long: 0,
        WKT: "",
      }
    ],
  };
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
      },
      (error) => alert(error.message),
      { timeout: 4000, maximumAge: 3000 }
    )

    fetch("http://data.goteborg.se/ParkingService/v2.1/PublicTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude="+curentPosition.latitude+"&longitude="+curentPosition.longitude+"&radius=500&format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const parkings = [];

      for (const key in data) {
        const parking = {
          id:key,
          ...data[key]
        };

        parkings.push(parking);
      }
      setLoadedParkings([...parkings,setLoadedParkings])
    });
  }, []);

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
