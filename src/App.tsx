import ToastAnimated from "./components/CustomToast";
import { SignUpPage } from "./components/SignUpPage";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <SignUpPage />
      <ToastAnimated />
    </>
  )
}
