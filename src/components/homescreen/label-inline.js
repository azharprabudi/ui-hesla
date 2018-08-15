import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3
  }
});

const LabelInline = ({
  textLeftProps,
  leftText,
  textRightProps,
  rightText
}) => (
  <View style={styles.container}>
    <Text {...textLeftProps}>{leftText}</Text>
    <Text {...textRightProps}>{rightText}</Text>
  </View>
);

LabelInline.propTypes = {
  textLeftProps: PropTypes.object,
  textRightProps: PropTypes.object,
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired
};

LabelInline.defaultProps = {
  textLeftProps: {},
  textRightProps: {}
};

export default LabelInline;
