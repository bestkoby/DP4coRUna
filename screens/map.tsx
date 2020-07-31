import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { Text, View } from '../components/Themed';
import { StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';


export default function Map(){
    const [region, setRegion] = useState({
        latitude: 40.5008,
        longitude: -74.4474,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <MapView 
            style={styles.mapStyle}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}
            
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
