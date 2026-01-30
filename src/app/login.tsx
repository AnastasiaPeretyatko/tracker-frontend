import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../shared/ui/Input/Input';
import { COLOR } from '../shared/common/tokens';
import Button from '../shared/ui/Button/Button';
import { Link } from 'expo-router';
import { AuthContext } from '@/shared/utils/authContext';

const Login = () => {
  const authState = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onClickSignIn = () => {
    authState.logIn(data);
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
        <Link href="/forgot-password">Forgot Password</Link>
        <Button
          label="Login"
          variant="primary"
          onPress={onClickSignIn}
          loading={authState.isLoading}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>
          Don't have an account?
          <Link style={styled.link} href="/register">
            {' '}
            Sign Up
          </Link>
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
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
  },
});

export default Login;
