import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Mango" },
    { id: 2, text: "Orange" },
    { id: 3, text: "Water melon" },
    { id: 4, text: "Coconut" },
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert("Ooops!", "Please type something", [
        {
          text: "Ok",
        },
      ]);
    } else {
      if (items.some((item) => item.text === text)) {
        Alert.alert("Ooops!", "Item is already in the list", [
          {
            text: "Ok",
          },
        ]);
      } else {
        setItems((prevItems) => [{ id: items.length + 1, text }, ...prevItems]);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
