import { StyleSheet } from "react-native";
import { pallete } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgHome: {
    width: 300,
    height: 200,
  },
  btnAdd: {
    backgroundColor: pallete[7].bgColor(1),
    height: 60,
    width: 250,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 14,
    color: pallete[7].bgColor(1),        
  },
});
