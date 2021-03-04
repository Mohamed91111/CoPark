import React from 'react';
import { Component } from 'react';
import MapView  from 'react-native-maps';



export default class App extends Component {  
render() {    
  return (      
  <MapView        
     style={{flex: 1}}        
     region={{ latitude: 57.705432, longitude: 11.972467, latitudeDelta: 0.0050, longitudeDelta: 0.0050 }}       
     showsUserLocation={true} 
     showsScale={true}
  />
    );
  }
}