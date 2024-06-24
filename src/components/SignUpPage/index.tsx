import { useCallback, useState } from "react";
import { apiProjects } from "../../services/api";
import * as z from 'zod'
import {
  ButtonContainer,
  Form,
  InputsCotainer,
  MainContainer,
  ModalButtonContainer,
  ModalContainer,
  ModalTitle,
  ModalTitleAndSubtitleContainer,
  Title,
} from "./styles";
import { CustomInput } from "../CustomInput";
import { showToast } from "../CustomToast";
import { CustomModal } from "../CustomModal";
import { PrimaryLargeButton } from "../CustomButtons/Large/Primary";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpUserDataSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

type SignUpFormInputs = z.infer<typeof signUpUserDataSchema>

export function SignUpPage() {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit, reset } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpUserDataSchema)
  })

  function handleCloseModal() {
    setIsOpen(false)
    reset()
  }

  function handleOpenModal() {
    setIsOpen(true)
  }

  const handleFormSubmit = useCallback(async (data: SignUpFormInputs) => {
    console.log(data)
    const { password, passwordConfirmation } = data
    if (password !== passwordConfirmation) {
      showToast({ type: 'error', message: 'As senhas não coincidem.' })
      return;
    }
    const { email } = data
    try {
      const response = await apiProjects.get(`users?email=${email}`);
      if (response.data.length > 0) {
        showToast({ type: 'error', message: 'O e-mail já está em uso.' });
        return;
      }
      await apiProjects.post('users', data);
      showToast({ type: 'success', message: 'Sucesso' });
      handleOpenModal();
    } catch (err) {
      console.error(err);
      showToast({ type: 'error', message: 'Um problema inesperado ocorreu, verifique a conexão com o servidor' });
    }
  }, [])

  return (
    <MainContainer>
      <CustomModal isShowing={isOpen} onRequestClose={handleCloseModal}>
        <ModalContainer>
          <ModalTitleAndSubtitleContainer>
            <ModalTitle >
              Conta Criada com Sucesso!
            </ModalTitle>
          </ModalTitleAndSubtitleContainer>
          <ModalButtonContainer>
            <PrimaryLargeButton
              variant="contained"
              type="button"
              onClick={handleCloseModal}
            >
              Voltar
            </PrimaryLargeButton>
          </ModalButtonContainer>
        </ModalContainer>
      </CustomModal>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsCotainer>
          <Title>Crie sua conta</Title>
          <CustomInput
            id="name"
            type="text"
            titleInput="Nome"
            placeHolder="Seu nome"
            required
            {...register('name')}
          />
          <CustomInput
            id="email"
            type="email"
            titleInput="E-mail"
            placeHolder="Seu melhor e-mail"
            required
            {...register('email')}
          />
          <CustomInput
            id="password"
            type="password"
            titleInput="Senha"
            placeHolder="Crie uma senha"
            required
            {...register('password')}
          />
          <CustomInput
            id="passwordConfirmation"
            type="password"
            titleInput="Confirmação de senha"
            placeHolder="Confirme sua senha"
            required
            {...register('passwordConfirmation')}
          />
        </InputsCotainer>
        <ButtonContainer>
          <PrimaryLargeButton variant="contained" type="submit">criar conta</PrimaryLargeButton>
        </ButtonContainer>
      </Form>
    </MainContainer>
  )
}