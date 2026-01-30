import Toast from 'react-native-toast-message';

type INotificationData = {
  title: string;
  description?: string;
};

export const useNotification = () => {
  const showNotification = (
    data: INotificationData,
    type: 'success' | 'error',
  ) => {
    Toast.show({
      type,
      text1: data.title,
      text2: data.description,
    });
  };

  const showErrorMessage = (data: INotificationData) =>
    showNotification(data, 'error');

  const showSuccessMessage = (data: INotificationData) =>
    showNotification(data, 'success');

  return { showErrorMessage, showSuccessMessage };
};
