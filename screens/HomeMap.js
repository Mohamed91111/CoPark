import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import MapView from "../components/MapView";

const HomeMap = ({ navigation }) => {
  return (
    <>
    <MapView
    style={{ height: '50vh', width: '100%' }}
      region={{
        latitude: 57.705432,
        longitude: 11.972467,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      showsUserLocation={true}
    >
    </MapView>
    <Text>This is the home map screen</Text>
      <Button
        title="Go to ParkingInfo Screen"
        onPress={() => navigation.navigate("ParkingInfo")} // We added an onPress event which would navigate to the ParkingInfo screen
      />
    </>
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

export default HomeMap;
