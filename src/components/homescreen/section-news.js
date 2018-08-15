import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginRight: 8,
    elevation: 2
  },
  image: {
    width: 150,
    height: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  wrapperLabel: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 5
  },
  label: {
    color: "black",
    fontWeight: "700"
  }
});

const SectionNews = ({ imageUrl, title, subtitle }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: imageUrl }}
      resizeMode={"cover"}
      style={styles.image}
    />
    <View style={styles.wrapperLabel}>
      <Text style={styles.label}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  </View>
);

export default SectionNews;
