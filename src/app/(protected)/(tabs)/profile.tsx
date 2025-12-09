import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../../utils/authContext';
import Button from '../../../shared/ui/Button/Button';

const Profile = () => {
  const authState = useContext(AuthContext);

  return (
    <View>
      <Text>Profile</Text>
      <Button label="Log out" onPress={() => authState.logOut()} />
    </View>
  );
};

export default Profile;
