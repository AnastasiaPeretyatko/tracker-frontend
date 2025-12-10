import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../shared/ui/Input/Input';
import { COLOR } from '../shared/common/tokens';
import Button from '../shared/ui/Button/Button';
import { Link } from 'expo-router';
import { AuthContext } from '@/shared/utils/authContext';

const RegisterPage = () => {
  const authState = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onClickSignUp = () => {
    authState.signUp(data);
  };

  return (
    <View style={styled.layout}>
      <View style={{ marginVertical: 100 }}>
        <Text style={styled.logo}>Welcome</Text>
        <Text style={{ color: COLOR.INPUT_PLACEHOLDER }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View style={styled.containerForm}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setData((prev) => ({ ...prev, email: text }))}
        />
        <Input
          placeholder="Password"
          isPassword
          onChangeText={(text) =>
            setData((prev) => ({ ...prev, password: text }))
          }
        />
        <Button
          label="Sign up"
          variant="primary"
          onPress={onClickSignUp}
          loading={authState.isLoading}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
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
    flexDirection: 'column',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  containerForm: {
    gap: 16,
    alignItems: 'flex-end',
    marginBottom: 16,
  },
});

export default RegisterPage;
