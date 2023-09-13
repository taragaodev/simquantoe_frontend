import { FlatList } from "react-native";
import ProductCard from "../ProductCard/CardProduct";

export function Rows() {
  const products = [
    {
      id: 1,
      name: "Café em pó especial",
      description: "Café em pó especial",
      supermarket: [
        {
          id: 1,
          name: "Atacadão Iguatemi",
          price: "13.90",
          address: {
            log: "Av. Tancredo Neves, 3413",
            lat: -12.979377,
            lng: -38.45732,
          },
          photo: require("../../../assets/supermarkets/atacadaoiguatemi.jpg"),
        },
      ],
      imageUrl: require("../../../assets/cafe.png"),
      barcode: "1234554321",
    },
    {
      id: 2,
      name: "Macarrão com ovos Adria",
      description: "Macarrão com ovos",
      supermarket: [
        {
          id: 1,
          name: "Atacadão Iguatemi",
          price: "3.90",
          address: {
            log: "Av. Tancredo Neves, 3413",
            lat: -12.979377,
            lng: -38.45732,
          },
          photo: require("../../../assets/supermarkets/atacadaoiguatemi.jpg"),
        },
      ],
      imageUrl: require("../../../assets/macarrao.png"),
      barcode: "23455432",
    },
    {
      id: 3,
      name: "Feijão carioquinha Namorado",
      description: "Feijão carioquinha",
      supermarket: [
        {
          id: 1,
          name: "Atakarejo Fazenda Coutos",
          price: "11.90",
          address: {
            log: "BA-528 - Fazenda Coutos",
            lat: -12.84670,
            lng: -38.45591,
          },
          photo: require("../../../assets/supermarkets/atakarejofc.jpg"),
        },
        {
          id: 2,
          name: "Atakarejo Paralela",
          price: "12.85",
          address: {
            log: "Av. Luís Viana Filho, 6282",
            lat: -12.93987,
            lng: -38.41371,
          },
          photo: require("../../../assets/supermarkets/atakarejoluis.jpg"),
        },
        {
          id: 3,
          name: "Atacadão Iguatemi",
          price: "10.68",
          address: {
            log: "Av. Tancredo Neves, 3413",
            lat: -12.979377,
            lng: -38.45732,
          },
          photo: require("../../../assets/supermarkets/atacadaoiguatemi.jpg"),
        },
      ],
      imageUrl: require("../../../assets/feijao.png"),
      barcode: "3456776543",
    },
  ];

  return (
    <FlatList      
      data={products}
      renderItem={({ item }) => {
        return <ProductCard item={item} />;
      }}
    />
  );
}
