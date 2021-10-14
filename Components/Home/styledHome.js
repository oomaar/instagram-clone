import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2rem;

  @media screen and (max-width: 400px) {
    display: flex;
    padding: 5rem 0;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 858px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 330px;
  width: 100%;
  padding: 0.5rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 400px) {
    width: 150px;
    align-self: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  padding: 0.5rem;

  @media screen and (max-width: 400px) {
    border: 0;
    padding: 0;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;

  span {
    position: absolute;
    top: 30%;
    left: 1.2rem;
    color: #c5c5c5;
    transition: all 0.3s ease;
    margin-top: 0.3rem;
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  background: transparent;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.3rem;
  border: 0;
  outline: 0;
  padding-left: 1.2rem;
  padding-top: 1rem;

  :valid + ${InputLabel} span {
    top: 0px;
    font-size: 0.6rem;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid whitesmoke;
  position: relative;
  height: 45px;
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;

  ${Input}:focus + ${InputLabel} span {
    top: 0px;
    font-size: 0.7rem;
  }

  :focus-within {
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: #fff;
  align-self: center;
  border: 0;
  outline: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const SpanTag = styled.span`
  position: relative;
  align-self: center;

  ::before {
      content: "";
      width: 130px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.line};
      position: absolute;
      top: 7px;
      left: -140px;

      @media screen and (max-width: 400px) {
        width: 80px;
        left: -90px;
      }
  }

  ::after {
      content: "";
      width: 130px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.line};
      position: absolute;
      top: 7px;
      margin-left: 10px;

      @media screen and (max-width: 400px) {
        width: 80px;
      }
  }
`;

export const FormOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FacebookLink = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.buttonAlt};
  }
`;

export const ResetLink = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin-top: 1rem;
`;

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid hsla(0, 0%, 0%, 0.08);
  padding: 0.5rem 1rem;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonAlt};
    font-weight: 600;
    background: transparent;
  }

  @media screen and (max-width: 400px) {
    border: 0;
    padding: 0;
    gap: 0;
  }
`;

export const GetAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const DownloadButton = styled.button`
  color: #fff;
  background: #000;
  outline: 0;
  border: 0;
  border-radius: 0.3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }

  p {
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }

  span {
    font-size: 0.5rem;
  }
`;