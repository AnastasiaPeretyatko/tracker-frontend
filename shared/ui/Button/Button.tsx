import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  variant?: "base" | "primary";
} & PressableProps;

const Button = ({ label, variant = "base", ...props }: Props) => {
  return (
    <Pressable style={[styles.base, styles[variant]]} {...props}>
      <Text style={styles[variant]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 6,
  },

  primary: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
  },
});

export default Button;
