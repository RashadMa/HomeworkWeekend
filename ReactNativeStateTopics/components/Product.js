import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { getProducts } from "../actions/getProducts";
import { deleteProduct } from "../actions/deleteProduct";
import { editProduct } from "../actions/editProduct";

const Product = ({ products, setProducts }) => {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleEdit = (id, { productName, categoryName, price }) => {
    editProduct(id, { productName, categoryName, price });
  };

  return (
    <View>
      {products?.map((item) => (
        <View key={item.id} style={styles.mainHolder}>
          <View style={styles.leftSide}>
            <View>
              <Image
                style={styles.tinyIcon}
                source={require("../assets/icons.png")}
              />
            </View>
            <View style={styles.midSide}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.categoryName}>
                Category: {item.categoryName}
              </Text>
              <Text style={styles.price}>Price: {item.price}</Text>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <Pressable
              onPress={() => handleDelete(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.text}>delete</Text>
            </Pressable>
            <Pressable style={styles.editButton}>
              <Text onPress={() => handleEdit(item.id)} style={styles.text}>
                edit
              </Text>
            </Pressable>
          </View>
        </View>
      ))}
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter product name" />
        <TextInput style={styles.input} placeholder="Enter price" />
        <TextInput style={styles.input} placeholder="Enter category" />
        <Pressable style={styles.button}>
          <Text style={styles.textA}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    position: "absolute",
    right: -44,
    top: 3,
  },
  mainHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 12,
    position: "relative",
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontWeight: "400",
    fontSize: 17,
    color: "#0A0A0A",
    marginBottom: 10,
  },
  midSide: {
    marginLeft: 13,
    transform: [{ translateX: 60 }],
  },
  categoryName: {
    fontWeight: "400",
    fontSize: 15,
    color: "#6A707C",
  },
  price: {
    fontWeight: "400",
    fontSize: 15,
    color: "#6A707C",
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#FF2849",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#30C04F",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "400",
    color: "white",
  },
  buttonWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  },
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
  textA: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    color: "white",
  },
});

export default Product;
