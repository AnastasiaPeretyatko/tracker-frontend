import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import TextUI from '@/shared/ui/TextUI';
import { useRealm } from '@realm/react';
import { useLocalSearchParams } from 'expo-router';
import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import { BSON } from 'realm';

const HobbyDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const realm = useRealm();

  const hobby = React.useMemo(() => {
    if (!id) return null;
    return realm.objectForPrimaryKey<Hobbies>('Hobbies', new BSON.UUID(id));
  }, [realm, id]);

  if (!hobby) {
    return <TextUI>Something is wrong!!!</TextUI>;
  }

  return (
    <View style={{ flexDirection: 'column' }}>
      <TextUI size="lg">{hobby.title}</TextUI>
      <TextUI>{hobby.description}</TextUI>

      <TextUI size="sm" variant="describe">
        Created: {moment(hobby.createdAt).format('DD/MM/YYYYY')}
      </TextUI>
      {hobby.deletedAt && (
        <TextUI size="sm" variant="describe">
          Created: {moment(hobby.deletedAt).format('DD/MM/YYYYY')}
        </TextUI>
      )}
    </View>
  );
};

export default HobbyDetails;
