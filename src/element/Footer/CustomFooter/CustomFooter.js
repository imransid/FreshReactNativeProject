import React, { useState } from "react";
import { View } from "react-native";

import { HorizontalLine } from "../../../@library";

const cusFooter = () => {
  return (
    <View style={{ flex: 0.2, alignItems: "center" }}>
      <HorizontalLine width={166} height={3} />
    </View>
  );
};

export default cusFooter;
