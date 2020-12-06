import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";

// import {
//     PURPLE,
//     MAIN_FONT,
//     PINK,
//     BLACK,
//     WHITE,
//     STILETTO,
//     MAIN_FONT_BOLD,
//     HEADER_HEIGHT,
//     STATUS_BAR_HEIGHT,
//     BOTTOM_TAB_HEIGHT,
//     DARK,
//     MAIN_FONT_SEMI_BOLD,
// } from '../../../constants';

const { width, height } = Dimensions.get("window");

export default ScaledSheet.create({
  container: {
    backgroundColor: BLACK,
  },
});
