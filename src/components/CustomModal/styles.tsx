import Modal from 'react-modal'
import styled from 'styled-components'

export const StyledModal = styled(Modal)`
  &.react-auth-modal-content {
    overflow: auto;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 53.187rem;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    -webkit-overflow-scrolling: auto;
    border-radius: 40px;
    outline: none;
    padding: 20px;
  }
`
export const Container = styled.form``

export const CloseButton = styled.button`
  background: none;
  border: none;
  align-self: center;
  justify-self: center;
  margin-bottom: 16px;
  cursor: pointer;
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
