import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { postProduct } from "../actions/postProduct";
import { getProducts } from "../actions/getProducts";

const CustomInput = ({ products, setProducts }) => {
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    postProduct("", { productName, categoryName, price })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setCategoryName("");
    setProductName("");
    setPrice("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={productName}
        onChangeText={(value) => setProductName(value)}
        style={styles.input}
        placeholder="Enter product name"
      />
      <TextInput
        defaultValue={categoryName}
        onChangeText={(value) => setCategoryName(value)}
        style={styles.input}
        placeholder="Enter category"
      />
      <TextInput
        defaultValue={price}
        onChangeText={(value) => setPrice(value)}
        style={styles.input}
        placeholder="Enter price"
      />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  input: {
    backgroundColor: "#F7F8F9",
    borderColor: "#E8ECF4",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    elevation: 3,
    backgroundColor: "#1E232C",
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    color: "white",
  },
});

export default CustomInput;
