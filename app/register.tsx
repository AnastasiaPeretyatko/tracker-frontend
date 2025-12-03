import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../shared/ui/Input/Input";
import { COLOR } from "../shared/common/tokens";
import Button from "../shared/ui/Button/Button";
import { Link } from "expo-router";

const RegisterPage = () => {
  return (
    <View style={styled.layout}>
      <View style={{ marginVertical: 100 }}>
        <Text style={styled.logo}>Welcome</Text>
        <Text style={{ color: COLOR.INPUT_PLACEHOLDER }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View style={styled.containerForm}>
        <Input placeholder="Email" />
        <Input placeholder="Password" isPassword />
        <Button label="REGISTER" variant="primary" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>
          You have an account?
          <Link href="/login"> Login</Link>
        </Text>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 32,
  },
  containerForm: {
    gap: 16,
    alignItems: "flex-end",
    marginBottom: 16,
  },
});

export default RegisterPage;
