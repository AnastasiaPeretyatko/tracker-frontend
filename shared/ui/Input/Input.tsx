import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import FiEyeIcon from "../../icons/FiEyeIcon";
import { COLOR } from "../../common/tokens";
import FiEyeOffIcon from "../../icons/FiEyeOffIcon";

type Props = {
  isPassword?: boolean;
} & TextInputProps;

const Input = ({ isPassword, ...props }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    isPassword || false
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...props}
        secureTextEntry={isPasswordVisible}
      />
      <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        {isPassword &&
          (isPasswordVisible ? (
            <FiEyeOffIcon
              width={20}
              height={20}
              color={COLOR.INPUT_PLACEHOLDER}
            />
          ) : (
            <FiEyeIcon width={20} height={20} color={COLOR.INPUT_PLACEHOLDER} />
          ))}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.INPUT_BG,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
  },
  input: {
    color: "black",
    flex: 1,
  },
});

export default Input;
