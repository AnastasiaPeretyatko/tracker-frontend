import { COLOR, VAR } from '@/shared/common/tokens';
import FiCalendar from '@/shared/icons/FiCalendar';
import TextUI from '@/shared/ui/TextUI';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { TimerPickerModal } from 'react-native-timer-picker';
import { LinearGradient } from 'expo-linear-gradient';
import Heading from '@/shared/ui/Heading';

const BlockInputTime = () => {
  return (
    <View
      style={{
        backgroundColor: COLOR.GRAY_LIGHT,
        borderRadius: VAR.BORDER_RADIUS.MD,
        padding: 10,
        width: '100%',
        gap: 10,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <FiCalendar width={16} color={COLOR.GRAY_PRIMARY} />
        <Heading type="h3">TIME</Heading>
      </View>
      <View style={{ flexDirection: 'row', gap: 4, width: '100%' }}>
        <TimePickerBlock type="from" />
        <TimePickerBlock type="to" />
      </View>
    </View>
  );
};

const TimePickerBlock = ({ type }: { type: 'from' | 'to' }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setShowPicker(!showPicker)}
        style={{
          flexDirection: 'column',
          backgroundColor: COLOR.GRAY,
          width: '50%',
          padding: 8,
          borderRadius: 10,
        }}
      >
        <TextUI variant="describe">{type}</TextUI>

        <TextUI size="base">5:00 pm</TextUI>
      </Pressable>

      <TimerPickerModal
        closeOnOverlayPress
        LinearGradient={LinearGradient}
        modalProps={{
          overlayOpacity: 0.2,
        }}
        // modalTitle="Set Alarm"
        onCancel={() => setShowPicker(false)}
        onConfirm={(pickedDuration) => {
          console.log(pickedDuration);
          // setAlarmString(formatTime(pickedDuration));
          setShowPicker(false);
        }}
        setIsVisible={setShowPicker}
        styles={{
          theme: 'light',
        }}
        visible={showPicker}
      />
    </>
  );
};

export default BlockInputTime;
