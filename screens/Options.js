import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Options = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Options screen</Text>
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
});

export default Options;