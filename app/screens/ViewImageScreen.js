import {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Text,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import colors from "../config/colors";

function ViewImageScreen({ navigation, route }) {
  const [Product, setProduct] = useState([
    { image: require("../assets/hat.jpg"), name: "Hat", key: "1" },
    { image: require("../assets/pants.jpg"), name: "Pants", key: "2" },
    { image: require("../assets/hoodie.jpg"), name: "Hoodie", key: "3" },
    { image: require("../assets/skirt.jpg"), name: "Skirt", key: "4" },
    { image: require("../assets/shirt.jpg"), name: "Shirt", key: "5" },
    { image: require("../assets/jacket.jpg"), name: "Jacket", key: "6" },
    { image: require("../assets/shoes.jpg"), name: "Shoes", key: "7" },
    { image: require("../assets/socks.jpg"), name: "Socks", key: "8" },
  ]);
  let itemKey = route.params.key;
  let itemDir = route.params.image;
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/hat.jpg")}
        style={styles.productImage}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ImagePicker")}>
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
    flex: 1,
    justifyContent: "flex-end",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
});

export default ViewImageScreen;
