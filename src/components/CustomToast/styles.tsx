import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyToast = styled(ToastContainer)`

.Toastify__toast--success {
  background: var(--success);
  color: var(--white);
  width: 400px;
  min-height: 50px;
  max-height: 50px;
}

.Toastify__toast--error {
  background:var(--error);
  color: var(--white);
  width: 400px;
  min-height: 50px;
  max-height: 50px;
}


.Toastify__toast--warning {
  background:var(--warning);
  color: var(--white);
  width: 400px;
  min-height: 50px;
  max-height: 50px;
}

.Toastify__toast--info {
  background: var(--information);
  color: var(--white);
  width: 400px;
  min-height: 50px;
  max-height: 50px;
}
`;