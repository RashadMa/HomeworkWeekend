import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PageHeader from "./components/PageHeader";
import CustomInput from "./components/CustomInput";
import BodyText from "./components/BodyText";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader />
      <CustomInput />
      <BodyText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: "#fff",
  },
});
