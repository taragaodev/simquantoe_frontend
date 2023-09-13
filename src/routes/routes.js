import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddScreen from "../screens/AddProduct/AddScreen";
import BarcodeScanner from "../screens/ScannerBarcode/BarcodeScanner";
import { pallete } from "../theme";
import Tabs from "./tabNavigator";
import ProductInfo from "../screens/ProductInfo/ProductInfo";
import LocationSupermarket from "../screens/LocationSupermarket/Location";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Seja bem vindo!"
          component={Tabs}
          options={{
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: pallete[7].bgColor(1),
            },
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: pallete[7].bgColor(1),
            },
            title: "Adicionar produto",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Código de Barras"
          component={BarcodeScanner}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Info"
          component={ProductInfo}
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_right",
            title: "Onde encontro?",
            headerStyle: {
              backgroundColor: pallete[7].bgColor(1),
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Location"
          component={LocationSupermarket}
          options={{
            presentation: "fullScreenModal",
            animation: "slide_from_right",
            headerStyle: false                        
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
