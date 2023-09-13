import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductInfo() {
  const route = useRoute();
  const navigation = useNavigation()
  const product = route.params.name;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{product}</Text>
        {route.params.supermarket.map((item) => {
          
          return (
            <View style={styles.content} key={item.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Location', item)}>
                <Image source={item.photo} style={styles.photo} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: "#000" }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: "#888" }}>
                {
                  item.address.log
                }
              </Text>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>
                R$ {item.price}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
