import { StyleSheet } from "react-native";
import { pallete } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  // FORMULARIO
  form: {
    flex: 1,
    alignItems: 'center'
  },
  info: {
    alignItems: 'center',
    padding: 14,
    gap: 10
  },
  text: {
    width: 300,
    height: 50,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 16
  },
  textArea: {
    backgroundColor: '#fff',
    width: 300,
    textAlignVertical: 'top',
    padding: 14,
    fontSize: 16
  },
  // CAPTURA
  images: {
    borderWidth: .5,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
    width: 150,
    height: 150,    
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: pallete[7].bgColor(1),
  },
  buttonText: { 
    color: "#fff",
    fontSize: 16
  },
  avatar: {
    width: 120,
    height: 120,
  },
  effect: {     
    width: 330,        
    height: 1,    
    backgroundColor: '#ff0000'    
  }
  
  // barcodeButton:{        
  //   width: 100,
  //   height: 40,
  //   backgroundColor: pallete[1].bgColor(1),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 15,
  //   marginTop: 3,    
  // }
});
