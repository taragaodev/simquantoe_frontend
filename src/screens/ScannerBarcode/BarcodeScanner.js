import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function BarcodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);  
  const navigation = useNavigation()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  },[])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    // alert(`Código de barras do tipo ${type} e dados ${data} forão digitalizados`)
    navigation.navigate('Adicionar Produto', data)   
    

    if(hasPermission === null){
      return <Text>Solicitando permissão da câmera</Text>
    }
    if(hasPermission === false){
      return <Text>Sem acesso a câmera</Text>
    }
    
  }
 return (   
   <View style={styles.barcode}>
   <BarCodeScanner
     onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
     style={StyleSheet.absoluteFillObject}
   />
   {
     scanned && <Button title={'Toque para scanear novamente'} onPress={() => setScanned(false)} />
   }
 </View>
  );
}