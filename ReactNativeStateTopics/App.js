import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PageHeader from "./components/PageHeader";
import CustomInput from "./components/CustomInput";
import BodyText from "./components/BodyText";
import Product from "./components/Product";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PageHeader />
        <CustomInput setProducts={setProducts} products={products} />
        <BodyText />
        <Product setProducts={setProducts} products={products} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: "#fff",
  },
  scrollView: {
    marginBottom: 10,
  },
});
