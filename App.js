import React from "react";
import ProductsScreen from "./src/screens/ProductsScreen";
import { StatusBar, StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={StyleSheet.container}>
        {/* <ProductsScreen /> */}
        {/* <ProductDetailsScreen /> */}
        <ShoppingCart />

        <StatusBar style="auto" />
      </View>
    </Provider>
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
