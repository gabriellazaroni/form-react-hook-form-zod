import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyToast } from './styles';
import whiteCheck from '../../assets/white-alert-check.svg'
import whiteExclamation from '../../assets/white-alert-exclamation.svg'
import whiteExclamationTriangle from '../../assets/white-alert-exclamation-triangle.svg'
import whiteCloseButton from '../../assets/white-alert-close-button.svg'

interface ShowToastType {
  type: string
  message: string
}

export const showToast = ({ type, message }: ShowToastType) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        transition: Flip,
        icon: () => <img src={whiteCheck} />,
        hideProgressBar: true,
        closeButton: () => <img src={whiteCloseButton} />
      });
      break;
    case 'error':
      toast.error(message, {
        transition: Flip,
        icon: () => <img src={whiteExclamation} />,
        hideProgressBar: true,
        closeButton: () => <img src={whiteCloseButton} />
      })
      break;
    case 'warn':
      toast.warn(message, {
        transition: Flip,
        icon: () => <img src={whiteExclamationTriangle} />,
        hideProgressBar: true,
        closeButton: () => <img src={whiteCloseButton} />
      });
      break;
    case 'info':
      toast.info(message, {
        transition: Flip,
        icon: () => <img src={whiteExclamation} />,
        hideProgressBar: true,
        closeButton: () => <img src={whiteCloseButton} />
      })
      break;
  }
};

export default function ToastAnimated() {
  return <MyToast />;
}