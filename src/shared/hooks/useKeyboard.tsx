import React from 'react';
import { Keyboard } from 'react-native';

export function useKeyboard() {
  const [height, setHeight] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', (e) => {
      setOpen(true);
      setHeight(e.endCoordinates.height);
    });

    const hide = Keyboard.addListener('keyboardDidHide', () => {
      setOpen(false);
      setHeight(0);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return { open, height };
}
