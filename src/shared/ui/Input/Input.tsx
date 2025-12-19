import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import FiEyeIcon from '../../icons/FiEyeIcon';
import { COLOR } from '../../common/tokens';
import FiEyeOffIcon from '../../icons/FiEyeOffIcon';
import TextUI from '../TextUI';

type Props = {
  isPassword?: boolean;
  variant?: 'primary' | 'outline';
  lable?: string;
} & TextInputProps;

const Input = ({ isPassword, variant = 'primary', lable, ...props }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    isPassword || false,
  );

  return (
    <View style={{ flexDirection: 'column', gap: 4 }}>
      {lable && <TextUI variant="describe">{lable}</TextUI>}
      <View style={styles.container}>
        <TextInput
          style={[styles.input, styles[variant]]}
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
              <FiEyeIcon
                width={20}
                height={20}
                color={COLOR.INPUT_PLACEHOLDER}
              />
            ))}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 6,
  },
  input: {
    backgroundColor: COLOR.INPUT_BG,
    color: 'black',
    flex: 1,
  },
  primary: {
    backgroundColor: COLOR.INPUT_BG,
    color: 'black',
    borderRadius: 6,
    paddingHorizontal: 15,
  },
  outline: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: COLOR.INPUT_BG,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
});

export default Input;
