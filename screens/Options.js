import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Options = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}><Ionicons name="construct-outline" size={30} color="#f59300" /> Arbrte Pågår</Text>
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
  text: {
    color: '#f59300',
    fontSize:30,
    fontWeight: "bold",
  }
});

export default Options;