import React from "react";

import { Text } from "react-native";

const HeaderTitle = (props) => {
  return (
    <Text
      style={{ color: "#FFF", fontFamily: "Roboto-Bold", fontSize: props.size }}
    >
      {props.text}
    </Text>
  );
};

export default HeaderTitle;
