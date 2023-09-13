import React, { useCallback, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DatabaseConnection } from "../../database/database-connection";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    
  const navigation = useNavigation();

  useEffect(() => {
    DatabaseConnection.getConnection();
  }, []);

  return (
    <SafeAreaView style={styles.container} >
      <View style={{ alignItems: 'center' }}>
        {/* <Text style={[styles.text, {fontSize: 45}]}>Sim...</Text>
        <Text style={styles.text}>E quanto é?</Text> */}
        <Image 
          style={{ width: 550, height: 500 }}
          source={require('../../../assets/logo.png')}
        />
      </View>
      {/* <View>
        <Image
          source={require("../../../assets/mercado.png")}
          style={styles.imgHome}
        />
      </View> */}
      <View>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate("Add")}
        >
          <View>
            <Text
              style={{
                fontSize: 18,                
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Cadastrar produto
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
