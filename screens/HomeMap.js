import React from "react";
import { Button, View } from "react-native";
import MapView from "../components/MapView";

const HomeMap = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            top: "50%", //for center align
            alignSelf: "center", //for align to right
          }}
        >
          <Button
            title="Go to ParkingInfo Screen"
            onPress={() => navigation.navigate("ParkingInfo")} // We added an onPress event which would navigate to the ParkingInfo screen
          />
        </View>
      </MapView>
    </View>
  );
};

export default HomeMap;
