import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from './components/MapView';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoView from './components/InfoView';

export default function App() {
  return (
    <View style={styles.container}>
      <Header / >
      <MapView />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
