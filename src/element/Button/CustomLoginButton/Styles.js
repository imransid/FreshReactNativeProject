import React from "react";

import { Dimensions, StyleSheet } from "react-native";

const Styles = buttonColor =>
  StyleSheet.create({
    buttom: {
      width: "80%",
      backgroundColor: buttonColor,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      borderRadius: Dimensions.get("window").width * 0.5,
      flexDirection: "row",
      height: "60%"
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      color: "#FFF",
      fontFamily: "Roboto-Medium"
    }
  });

export default Styles;
