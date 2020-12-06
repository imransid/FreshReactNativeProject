import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./Login";

const Index = (props) => {
  return (
    <View style={styles.screen}>
      <Login {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Index;
