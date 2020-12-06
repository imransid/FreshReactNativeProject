import React from "react";

import { View, Text, ImageBackground, StatusBar } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { ChangeThemeColor } from "../../action/Setting";

import styles from "./Styles";

import { HorizontalLine } from "../../@library";

import CustomButton from "../../element/Button/CustomLoginButton/CustomLoginButton";
import CusFooter from "../../element/Footer/CustomFooter/CustomFooter";
import HeaderTitle from "../../element/HeaderTitle/HeaderTitle";

import LinearGradient from "react-native-linear-gradient";

const Login = () => {
  const themeColor = useSelector((state) => state.Settings.ThemeColor);

  const dispatch = useDispatch();

  const Styles = styles();

  return (
    <ImageBackground
      style={{
        flex: 1,
        resizeMode: "cover",
      }}
      source={require("../../assets/img/image2.jpg")}
    >
      <View style={Styles.container}>
        <StatusBar hidden />
        <View style={styles(5).content}></View>
        <View style={styles(2).content}>
          <View style={styles(0, 1).bodycontent}>
            <HeaderTitle text="Ideal store for your shoping" size={22} />
          </View>
          <View style={styles(0, 0.2).bodycontent}>
            <HorizontalLine width={"80%"} height={1} />
          </View>
        </View>
        <View style={styles(3).content}>
          <CustomButton text="sign up with email" fb={false} />
          <CustomButton text="continue with facebook" fb={true} />
          <CusFooter />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
