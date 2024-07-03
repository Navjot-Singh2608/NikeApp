import React from "react";
import ProductsScreen from "./src/screens/ProductsScreen";
import { StatusBar, StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={StyleSheet.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
