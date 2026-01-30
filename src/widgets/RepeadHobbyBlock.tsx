import { COLOR, VAR } from '@/shared/common/tokens';
import Heading from '@/shared/ui/Heading';
import React from 'react';
import { Switch, View } from 'react-native';

type Props = {
  isChecked?: boolean;
  setIsChecked: (check: boolean) => void;
};

const RepeadHobbyBlock = ({ setIsChecked, isChecked = false }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.GRAY_LIGHT,
        borderRadius: VAR.BORDER_RADIUS.MD,
        padding: 10,
        width: '100%',
        gap: 10,
      }}
    >
      <Heading type="h3">REPEAT</Heading>
      <Switch
        value={isChecked}
        onValueChange={() => setIsChecked(!isChecked)}
      />
    </View>
  );
};

export default RepeadHobbyBlock;
