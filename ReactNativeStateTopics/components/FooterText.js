import React from "react";
import { View, StyleSheet,Text } from "react-native";

const FooterText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>Update Product</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1E232C",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default FooterText;
