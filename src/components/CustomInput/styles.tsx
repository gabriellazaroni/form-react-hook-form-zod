import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`

export const Title = styled.h1`
  color: var(--gray-30);
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-sm);
  font-weight: 400;
  line-height: 18px;
`

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  height: 58px;
  border-radius: 8px;
  border: 0.8px solid var(--light-purple);
  background: var(--white);
  box-shadow: 0px 8px 16px 0px rgba(77, 63, 93, 0.10);
  padding: 20px 0px 20px 23px;
  &::placeholder {
    color: var(--gray-20);
  }
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-n);
  font-weight: 400;
  line-height: 22px;
  outline: none;

  -moz-appearance: textfield; /* Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ButtonInputImg = styled.button`
  display: flex;
  border: none;
`

export const Img = styled.img`
  display: block;
  max-width: 20px;
  width: 100%;
  position: absolute;
  right: 20px;
  top: 28px;
  cursor: pointer;
`