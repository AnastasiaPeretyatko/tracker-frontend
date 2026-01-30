import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Button from '../../../shared/ui/Button/Button';
import { AuthContext } from '@/shared/utils/authContext';

const Profile = () => {
  const authState = useContext(AuthContext);

  return (
    <View>
      <Text>Profile</Text>
      <Button
        label="Log out"
        onPress={() => authState.logOut()}
        variant="primary"
      />
    </View>
  );
};

export default Profile;
