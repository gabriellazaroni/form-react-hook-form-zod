import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 113px;
  background-color: var(--gray-70);
  @media(max-width: 1275px) {
    flex-direction: column;
    padding: 0px 34px;
    align-items: center;
  }
  @media(max-width: 610px) {
    gap: 57px;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: var(--white);
  font-size: var(--font-xl);
  font-weight: 400;
  line-height: 45px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  @media(max-width: 1275px) {
    margin-bottom: 32px;
    margin-top: 32px;
    line-height: 32px;
  }
`

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
`

export const InputsCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`

export const ConfirmPasswordError = styled.p`
  color: var(--error);
`

export const LinkSocialMedia = styled.a`
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 30px;
  @media(max-width: 700px) {
    padding: 20px 0px;
  }
`

export const ModalTitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalTitle = styled.h1`
  color: var(--gray-60);
  text-align: center;
  font-family: 'OktaNeue', sans-serif;
  font-size: var(--font-xl);
  font-weight: 400;
  line-height: 45px;
`

export const ModalSubTitle = styled.h2`
  color: var(--gray-40);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-n);
  font-weight: 400;
  line-height: 22px;
  width: 100%; 
  max-width: 416px;
  margin-top: 40px;
`

export const ModalSubTitleEmail = styled.p`
  color: var(--information);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-n);
  font-weight: 400;
  line-height: 22px;
  display: inline;
`

export const ModalTimerCode = styled.p`
  color: var(--dark-purple);
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-n);
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
`

export const SquareContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 48px;
  @media(max-width: 700px) {
    gap: 13px;
    margin-top: 40px;
  }
`

export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 70px;
  height: 94px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(77, 63, 93, 0.10);
  @media(max-width: 700px) {
    max-width: 40px;
    height: 52px;
  }
`;

export const InputSquare = styled.input`
  border: 0.8px solid var(--light-purple);
  width: 100%;
  max-width: 70px;
  height: 94px;
  outline: none;
  display: flex;
  font-size: var(--font-xl);
  text-align: center;
  border-radius: 8px;
  background: var(--white);
  @media(max-width: 700px) {
    max-width: 40px;
    height: 52px;
  }
`

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 72px; 
  @media(max-width: 700px){
    margin-top: 40px;
  }
`