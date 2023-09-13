import { useEffect, useRef, useState } from "react";
import {
  Easing,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Animated } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import SelectSupermarket from "../SelectSupermarket/SelectSupermarket";

export default function Form() {
  const [avatar, setAvatar] = useState();
  const navigation = useNavigation();
  // const [barcode, setBarcode] = useState('')
  const route = useRoute();
  // setBarcode(route.params)

  // Capturar imagem da galeria
  async function pickImage() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("Você precisa permitir acesso a galeria");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } else {
      return;
    }
  }
  // Capturar imagem da câmera
  async function openCamera() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("Você não tem permissão de acesso!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  }

  // ANIMAÇÃO
  const startValue = useRef(new Animated.Value(0)).current;
  function moveDown() {
    startValue.setValue(0);
    Animated.loop(Animated.timing(
      startValue,
      {
        toValue: 30,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )).start()
    // Animated.timing(startValue, {
    //   toValue: 30,
    //   duration: 500,
    //   easing: Easing.linear,
    //   useNativeDriver: true,      
    // }).start();
  }

  useEffect(() => {
    moveDown();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        {/* nome, descricao e preco */}
        <View style={styles.info}>
          <TextInput placeholder="nome do produto..." style={styles.text} />
          <TextInput placeholder="preço do produto..." style={styles.text} />
          <SelectSupermarket />
          {/* <Text style={styles.text} >{route.params}</Text> */}
          {/* <TextInput placeholder="código de barras..." value={barcode} style={styles.text} /> */}
          <TextInput
            placeholder="descrição do produto..."
            multiline={true}
            numberOfLines={4}
            maxLength={150}
            style={styles.textArea}
          />
        </View>

        {/* imagem capturada */}
        <View style={styles.images}>
          {avatar !== "" && (
            <Image
              source={{
                uri: avatar
                  ? avatar
                  : "https://img.freepik.com/icones-gratis/carrinho-de-compras_318-176794.jpg",
              }}
              style={styles.avatar}
            />
          )}
        </View>
        <Text style={{ fontSize: 16 }}>
          Selecione uma opção para obter a imagem...
        </Text>
        {/* botoes */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 14,
            width: 250,
            height: 50,
            marginTop: 14,
          }}
        >
          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openCamera} style={styles.button}>
            <Text style={styles.buttonText}>Câmera</Text>
          </TouchableOpacity>
        </View>

        {/* obtendo código de barras          */}
        <Text style={{ fontSize: 16, marginBottom: 4 }}>
          Toque na área para scannear o código de barras
        </Text>
        <View style={{ width: 350, height: 50 }}>
          <TouchableOpacity
            style={{
              width: 350,
              height: 50,
              padding: 5,
              borderWidth: 1,
              backgroundColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Código de Barras")}
          >
            <Animated.Image
              style={{
                width: 350,
                height: 1,
                transform: [
                  {
                    translateY: moveDown ? startValue : finalValue,
                  },
                ],
              }}
              source={require("../../../assets/linha.png")}
            />
            <TextInput
              disabled={true}
              value={route.params}
              style={{
                flexWrap: "wrap",
                color: "#000",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.button, { marginTop: 14 }]}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
