import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Rows } from '../../components/Products/rows';

export default function ListScreen() {
 return (
   <SafeAreaView style={styles.container}>
    <Rows/>
   </SafeAreaView>
  );
}