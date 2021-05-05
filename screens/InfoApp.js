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
          Denna Applikation levereras av <Text style={styles.textCodic}>CODIC</Text> Education och är utvecklad av LIA(läran i arbete) praktikanter under våren 2021. 
          Har du några synpunkter, tips eller behöver hjälp kontakta oss.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:hello@codic.se')}>
          <View style={styles.btnNavigation}>
            <Text style={styles.textBtnNavigation}>
              <FontAwesome name="envelope-o" size={30} color="#212121" /> Email:
              hello@codic.se
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
    fontSize:17,
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
    color: "#f7b045",
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
    backgroundColor: "#f7b045",
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
    color: "#f7b045",
    fontWeight: "bold",
  }
});

export default InfoApp;
