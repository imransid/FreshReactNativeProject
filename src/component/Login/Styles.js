import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = (flx, bodyflx) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(27, 57, 78, 0.8)",
      flexDirection: "column",
    },
    content: {
      flex: flx !== 0 ? flx : null,
    },
    bodycontent: {
      flex: bodyflx,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default styles;
