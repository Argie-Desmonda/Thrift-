import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";
import ViewImageScreen from "./ViewImageScreen";

function MainScreen({ navigation }) {
  const [Product, setProduct] = useState([
    {
      image: require("../assets/hat.jpg"),
      name: "Hat",
      price: "Rp50.000",
      key: "1",
    },
    {
      image: require("../assets/pants.jpg"),
      name: "Pants",
      price: "Rp150.000",
      key: "2",
    },
    {
      image: require("../assets/hoodie.jpg"),
      name: "Hoodie",
      price: "Rp200.000",
      key: "3",
    },
    {
      image: require("../assets/skirt.jpg"),
      name: "Skirt",
      price: "Rp100.000",
      key: "4",
    },
    {
      image: require("../assets/shirt.jpg"),
      name: "Shirt",
      price: "Rp50.000",
      key: "5",
    },
    {
      image: require("../assets/jacket.jpg"),
      name: "Jacket",
      price: "Rp250.000",
      key: "6",
    },
    {
      image: require("../assets/shoes.jpg"),
      name: "Shoes",
      price: "Rp200.000",
      key: "7",
    },
    {
      image: require("../assets/socks.jpg"),
      name: "Socks",
      price: "Rp10.000",
      key: "8",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={Product}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Image", item)}>
            <View style={styles.productContainer}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.textProduct}>{item.name}</Text>
              <Text style={styles.textProduct}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="upload" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Feather name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <AntDesign name="back" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: colors.bgColor,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  textButton: {
    color: "white",
    backgroundColor: colors.bgColor,
    padding: 15,
    fontSize: 15,
  },
  textProduct: {
    marginBottom: 5,
    marginTop: 5,
    padding: 1,
    fontSize: 24,
    color: colors.black,
    flexDirection: "row",
    //flex: 1,
  },

  productImage: {
    width: 320,
    height: 210,
    resizeMode: "contain",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    margin: 10,
    borderRadius: 15,
  },
});

export default MainScreen;
