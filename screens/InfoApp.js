import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Linking } from 'react-native'

const InfoApp = () => {
  return (
    <View style={styles.center}>
      <View style={styles.logoAppInfo}>
        <Image
          source={require("../assets/codic-logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.textLogo}>Parkings Helper</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.textContentBox}>
          Den här App-en levereras av <Text style={styles.textCodic}>CODIC</Text> EDUCATION och är byggd av <Text style={styles.textCodic}>CODIC</Text>'s studenter som har deltagit i olika kurser som <Text style={styles.textCodic}>CODIC</Text> erbjuder inåm IT-utbildningar.{"\n"}
          Har du synpunkter, tips eller behöver hjälp kontakta oss.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:hello@codic.se')}>
          <View style={styles.btnNavigation}>
            <Text style={styles.textBtnNavigation}>
              <FontAwesome name="envelope-o" size={30} color="#212121" /> Email:
              hello@codic.se
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${'0046768990065'}`)}>
          <View style={styles.btnNavigation}>
            <Text style={styles.textBtnNavigation}>
              <FontAwesome name="phone" size={30} color="#212121" />Tel:
              +46-768-990-065
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.versionBox}>
      <Text style={styles.versionText}>App Version: 1.0.1</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#212121",
  },
  textContentBox: {
    margin:20,
    fontSize:15,
    color: "#aaa",
    letterSpacing:1,
  },
  contentBox: {
    width: "90%",
    margin: 20,
  },
  logoAppInfo: {
    width: "90%",
  },
  textLogo: {
    display: "flex",
    color: "#f59300",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
    letterSpacing: 2,
  },
  logoImage: {
    marginLeft: 25,
  },
  btnNavigation: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 7,
    shadowColor: "black",
    paddingVertical: "5%",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#f59300",
  },
  textBtnNavigation: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#212121",
    letterSpacing: 1,
  },
  versionText: {
    fontSize:15,
    color: "#aaa",
    letterSpacing: 1,
  },
  textCodic: {
    color: "#f59300",
    fontWeight: "bold",
  }
});

export default InfoApp;
