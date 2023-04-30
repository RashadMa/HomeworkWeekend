import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PageHeader from "./components/PageHeader";
import CustomInput from "./components/CustomInput";
import BodyText from "./components/BodyText";
import Product from "./components/Product";
import FooterText from "./components/FooterText";
import EditInput from "./components/EditInput";
import axios from "axios";
import { useEffect, useState } from "react";
import { postProduct } from "./actions/postProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader />
      <CustomInput setProducts={setProducts} products={products} />
      <BodyText />
      <Product setProducts={setProducts} products={products} />
      <FooterText />
      <EditInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: "#fff",
  },
});
