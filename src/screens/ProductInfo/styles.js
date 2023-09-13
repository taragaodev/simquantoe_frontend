import { StyleSheet } from "react-native";
import { pallete } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 14,
  },
  content: {
    padding: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: pallete[7].bgColor(1),
    // backgroundColor: pallete[6].bgColor(1),
    borderRadius: 14,
    marginBottom: 5
  },
  photo: { 
    width: 300, 
    height: 200,
    borderRadius: 14
  },  
});
