import Button from '@/shared/ui/Button/Button';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { useRealm } from '@realm/react';
import BlockSelectionDay from '@/widgets/BlockSelectionDay';
import BlockInputTime from '@/widgets/BlockInputTime';
import Heading from '@/shared/ui/Heading';
import RepeadHobbyBlock from '@/widgets/RepeadHobbyBlock';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { COLOR, VAR } from '@/shared/common/tokens';
import { TASK_SCHEDULE_TYPE } from '@/shared/common/enum';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
};

const CreateHobbyModal = ({ bottomSheetRef }: Props) => {
  const realm = useRealm();

  const [isRepeated, setIsRepeated] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [title, setTitle] = React.useState('');

  const handleSaveForm = () => {
    realm.write(() => {
      const schedule = realm.create('HobbiesSchedule', {
        _id: new Realm.BSON.UUID(),
        type: TASK_SCHEDULE_TYPE.WEEKLY,
        weekdays: selectedDays,
        createdAt: new Date(),
      });

      realm.create('Hobbies', {
        _id: new Realm.BSON.UUID(),
        title,
        description: '',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        hobbiesSchedule: schedule, // 🔑 СВЯЗЬ
      });
    });

    closeSheet();
  };

  const clearForm = () => {
    setTitle('');
    setSelectedDays([]);
  };

  const closeSheet = () => {
    bottomSheetRef.current?.close();
    clearForm();
  };

  useEffect(() => {
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      bottomSheetRef.current?.snapToIndex(1); // 🔥 вернуть на 90%
    });

    return () => hideSub.remove();
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // 🔑 закрыт по умолчанию
      snapPoints={['70%', '90%']} // ✅ только до 100%
      enablePanDownToClose
      onClose={closeSheet}
      enableBlurKeyboardOnGesture
      android_keyboardInputMode="adjustPan"
      keyboardBehavior="interactive" // 🔑 САМОЕ ВАЖНОЕ
      keyboardBlurBehavior="none"
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1} // скрыть когда sheet закрыт
          appearsOnIndex={0} // показывать с первого snapPoint
          opacity={0.5} // прозрачность затемнения
        />
      )}
    >
      <BottomSheetScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Button variant="close" onPress={closeSheet}>
              Х
            </Button>
            <Heading type="h1">create hobby</Heading>
            <Button onPress={handleSaveForm}>Save</Button>
          </View>
          <BottomSheetTextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <BlockSelectionDay
            onSelectedDay={(val) => setSelectedDays(val)}
            selectedDay={selectedDays}
          />
          <BlockInputTime />
          <RepeadHobbyBlock
            isChecked={isRepeated}
            setIsChecked={(val) => setIsRepeated(val)}
          />
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    flex: 1,
  },
  input: {
    backgroundColor: COLOR.GRAY_LIGHT,
    borderRadius: VAR.BORDER_RADIUS.MD,
    paddingHorizontal: 12,
  },
});

export default CreateHobbyModal;
