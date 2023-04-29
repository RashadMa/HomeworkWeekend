import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Created Product</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1E232C",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default PageHeader;
