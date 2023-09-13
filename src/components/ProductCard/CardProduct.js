import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ item }) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View >
          <View style={styles.card}>
            <View style={styles.containerImage}>
              <Image source={item.imageUrl} style={styles.image} />
            </View>
            <TouchableOpacity 
              onPress={() => { navigation.navigate('Info', item) }}
              style={[styles.containerInfo, styles.elevation]}
            >
              <View style={styles.info}>
                <Text style={[styles.textInfo, {fontSize: 16}]}>{item.name}</Text>
                <Text style={styles.textInfo}>Saiba mais...</Text>               
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
