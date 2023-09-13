import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function LocationSupermarket() {
  const route = useRoute();
  const name = route.params.name;
  const id = route.params.id;
  const lat = route.params.address.lat;
  const lng = route.params.address.lng;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        key={id}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title={name}
          pinColor="#ff0000"
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
        />
      </MapView>
    </View>
  );
}
