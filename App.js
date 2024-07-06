import React from "react";
import ProductsScreen from "./src/screens/ProductsScreen";
import { StatusBar, StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
