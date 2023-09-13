import { StyleSheet } from "react-native";
import { pallete } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,             
    backgroundColor: '#fff',
    padding: 5,            
  },
  card: {        
    padding: 5,
    flexDirection: 'column',    
    alignItems: 'center',  
    justifyContent: 'space-around',  
    borderWidth: 2,
    borderColor: pallete[7].bgColor(1),
    // backgroundColor: pallete[6].bgColor(1),      
    borderRadius: 14
  },
  containerImage: {
    width: 140,
    height: 140,
    marginBottom: 14,
    backgroundColor: pallete[7].bgColor(1),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,        
  },
  containerInfo: {
    width: '100%',
    height: 60,
    padding: 14,
    backgroundColor: pallete[7].bgColor(1),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInfo:{
    color: '#fff',
    fontSize: 12
  },
  info:{
    gap: 5,
    alignItems: 'center'
  },
  elevation: {
    elevation: 5,
    borderRadius: 14,    
    shadowColor: '#000'
  }
})