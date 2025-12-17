import React from 'react';
import { Modal } from 'react-native';

type ModalProps = {
  opened: boolean;
  onClose: () => void;
} & React.PropsWithChildren;

const ModalUI = ({ children, onClose, opened }: ModalProps) => {
  return (
    <Modal visible={opened} onRequestClose={onClose} animationType="none">
      {children}
    </Modal>
  );
};

export default ModalUI;
