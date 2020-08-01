import React, { useEffect, useState }from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';
import NetInfo from '@react-native-community/netinfo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {NetworkInfo} from 'react-native-network-info';

const db = SQLite.openDatabase("feather.db");

export default function Home(){
    let [ssid, Setssid] = useState("");
    let [bssid, Setbssid] = useState("");
    let [strength, Setstrength] = useState(0);
     
    async function getLocationAsync() {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        NetInfo.fetch().then(state => {
          alert("your ssid is " + state.details.ssid);
        });
        return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      } else {
        throw new Error('Location permission not granted');
      }
    };

    function ipaddress(){
      NetInfo.fetch().then(state => {
        alert("your ipAddress is " + state.details.ipAddress);
      });
    };

    return(
      <View style={styles.container}>
        <Text style = {styles.title}>DP4coRUna</Text>
        <Button
          title="show my Wifi ssid"
          onPress = {getLocationAsync}
        ></Button>
        <Button
          title="show my ipaddress"
          onPress = {ipaddress}
        ></Button>
      <View/>
    </View>
    );
    
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
