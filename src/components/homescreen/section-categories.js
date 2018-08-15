import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 80,
    elevation: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  }
});

const Section = ({ label, iconName }) => (
  <View style={styles.container}>
    <Icon name={iconName} size={28} />
    <Text>{label}</Text>
  </View>
);

Section.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Section;
