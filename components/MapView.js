import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.007,
  longitudeDelta: 0.007,
};

function AppMap({ navigation }) {
  const [curentPosition, setCurentPosition] = useState(initialState);
  const [loadedParkings, setLoadedParkings] = useState([]);
  const [restart, setRestart] = useState(false);
  const [sortParkings, setSortParkings] = useState([]);
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      });

      setParkings([]);
      setSortParkings([]);

      const lat = position.coords.latitude.toString();
      const lon = position.coords.longitude.toString();

      fetch(
        "http://data.goteborg.se/ParkingService/v2.1/PublicTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude=" +
          lat +
          "&longitude=" +
          lon +
          "&radius=600&format=json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data1) => {
          parkings.push(...data1);
        })
        .then(() => {
          fetch(
            "http://data.goteborg.se/ParkingService/v2.1/PrivateTollParkings/799B2AEA-4D41-41A9-86A7-B0F31AE12D11?latitude=" +
              lat +
              "&longitude=" +
              lon +
              "&radius=600&format=json"
          )
            .then((response) => {
              return response.json();
            })
            .then((data2) => {
              parkings.push(...data2);

              if(parkings.length > 0) {
                parkings.sort(
                  (a, b) => a.CurrentParkingCost - b.CurrentParkingCost
                );
              }else{
                return;
              }
              

              const sortPrice = parkings[0].CurrentParkingCost;
              let sortDistance = parkings[0].Distance;

              for (let i = 0; i < parkings.length; i++) {
                if (
                  sortPrice === parkings[i].CurrentParkingCost &&
                  sortDistance > parkings[i].Distance
                ) {
                  sortDistance = parkings[i].Distance;
                  sortParkings.unshift(parkings[i]);
                } else {
                  sortParkings.push(parkings[i]);
                }
              }

              setLoadedParkings([...sortParkings]);
            });
        });
    });
  }, [restart]);

  return curentPosition.latitude ? (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ flex: 1 }}
      region={curentPosition}
      showsUserLocation={true}
      showsScale={true}
    >
      <TouchableOpacity
        style={styles.refresh}
        onPress={() => setRestart(!restart)}
      >
        <View>
          <FontAwesome name="refresh" size={40} color="#f59300" />
        </View>
      </TouchableOpacity>

      {loadedParkings.map((parking, index) => {
        return (
          <MapView.Marker
            coordinate={{ latitude: parking.Lat, longitude: parking.Long }}
            key={parking.Id}
            pinColor={"purple"} // any color
          >
            <View
              style={{
                backgroundColor: index == 0 ? "#212121" : "#f59300",
                padding: index == 0 ? 7 : 5,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: index == 0 ? "#f59300" : "#212121",
                  fontWeight: "bold",
                  fontSize: index == 0 ? 20 : 15,
                }}
              >
                {parking.CurrentParkingCost} kr/tim
              </Text>
            </View>
            <MapView.Callout
              style={styles.callout}
              onPress={() => navigation.navigate("ParkingInfo", parking)}
            >
              <Text style={{ fontWeight: "bold", color: "#f59300" }}>
                {parking.Name}
              </Text>
              {parking.CurrentParkingCost !== undefined && (
                <Text style={{ fontWeight: "bold", color: "#f59300" }}>
                  {" Pris: " + parking.CurrentParkingCost + " kr/tim"}
                </Text>
              )}
              {parking.ParkingSpaces !== undefined && (
                <Text style={styles.textInfo}>
                  {"Total Antal Platser: " + parking.ParkingSpaces}
                </Text>
              )}
              <Text style={styles.textInfo}>
                  "clicka för mer info"
              </Text>
            </MapView.Callout>
          </MapView.Marker>
        );
      })}
    </MapView>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
}

const styles = StyleSheet.create({
  textInfo: {
    color: "#aaa",
    fontWeight: "bold",
  },
  callout: {
    width: "250%",
    backgroundColor: "#212121",
    padding: 5,
    alignItems: "center",
  },
  refresh: {
    backgroundColor: "#212121",
    width: 40,
    borderRadius: 5,
    padding: 2,
  },
});

export default AppMap;
