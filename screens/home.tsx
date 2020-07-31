import React, { useEffect }from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("feather.db");

const add = () =>{
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql(
            `select * from items where done = ?;`,
            [doneHeading ? 1 : 0],
            (_, { rows: { _array } }) => setItems(_array)
          );
        });
      }, []);
}

