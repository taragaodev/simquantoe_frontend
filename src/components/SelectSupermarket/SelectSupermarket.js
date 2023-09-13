import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DropdownSelect } from "react-native-input-select";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { pallete } from "../../theme";

export default function SelectSupermarket() {
  const [supermarket, setSupermarket] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.select}>
      <DropdownSelect
        labelStyle={{ fontSize: 16, textAlign: "center" }}
        placeholder="Supermercado..."
        selectedItemStyle={{
          width: 400,
          fontSize: 16
        }}
        checkboxComponentStyles={{
          checkboxSize: 1,
          checkboxStyle: {
            borderWidth: 0,
            backgroundColor: 'transparent'            
          },
        }}
        options={[          
          { label: "Atacadão Iguatemi", value: "AtcIgu" },
          { label: "Atacadão Paralela", value: "AtcPal" },
          { label: "Atakarejo Pernanbués", value: "AtkPern" },
          { label: "Atakarejo Periperi", value: "AtkPeri" },
          { label: "Assaí Cabula", value: "AssCab" },
          { label: "Assaí Paripe", value: "AssPari" },
          {
            label: (              
                <TouchableOpacity
                  onPress={() => navigation.navigate("Supermercado")}
                  style={{
                    backgroundColor: pallete[5].bgColor(1),
                    width: 300,
                    height: 50,
                    borderRadius: 14,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    Adicione um novo
                  </Text>
                </TouchableOpacity>              
            ),
            value: "",
          },
        ]}
        selectedValue={supermarket}
        onValueChange={(value) => setSupermarket(value)}
      />
    </View>
  );
}
