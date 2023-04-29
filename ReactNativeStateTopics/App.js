import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import CustomInput from "./components/CustomInput";
import BodyText from "./components/BodyText";
import Product from "./components/Product";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader />
      <CustomInput />
      <BodyText />
      <Product />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: "#fff",
  },
});
