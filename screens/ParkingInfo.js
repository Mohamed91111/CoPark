import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const ParkingInfo = () => {
  return (
    <View style={styles.center}>
     <AntDesign name="rightcircleo" size={24} color="green" />
      <Text>This is the ParkingInfo screen</Text>
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