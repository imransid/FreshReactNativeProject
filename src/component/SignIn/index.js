import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import SignIn from "./SignIn";

const Index = (props) => {
  return (
    <View style={styles.screen}>
      <SignIn {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#242529",
  },
});

export default Index;
