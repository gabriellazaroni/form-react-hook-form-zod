import styled from 'styled-components'

export const LargeButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 76px;
  gap: 10px;
  border-radius: 80px;
  box-shadow: 0px 8px 16px 0px rgba(167, 139, 203, 0.10);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: var(--font-l);
`

export const LargeButtonContained = styled(LargeButtonBase)`
  background: var(--light-purple);
  color: var(--white);
  border: 1px solid var(--purple);
  &:disabled {
    background: var(--gray-10);
    color: var(--gray-10);
    cursor: not-allowed;
    border: 1px solid var(--black);
  }
  &:hover {
    color: var(--white);
    background: var(--medium-purple);
    transition: 0.2s ease, color 0.2s ease;
  }
   img {
    filter: brightness(0) invert(1);
    }
  @media(max-width: 450px) {
    height: 54px;
  }
`

export const GrayArrowIcon = styled.img`
  filter: none !important; 
` 
