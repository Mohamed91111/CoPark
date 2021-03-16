import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_DEFAULT}  from 'react-native-maps';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0050,
  longitudeDelta: 0.0050 
}

const AppMap = ()=>  {  
  const [curentPosition, setCurentPosition] = useState(initialState);  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position=>{
      //alert(JSON.stringify(position))
      const {longitude,latitude} = position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      })
    },
    error=>alert(error.message),
    {timeout:3000,maximumAge:2000}
    )
    
  }, [])

  return curentPosition.latitude ? (      
  <MapView  
     provider= {PROVIDER_DEFAULT}      
     style={{flex: 1}}        
     region={curentPosition }       
     showsUserLocation={true} 
     showsScale={true}
  />
    ) : <ActivityIndicator style={{flex:1}} animating size="large"/>
};

export default AppMap;