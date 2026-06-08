import styled from 'styled-components'

export const LoginUser = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background: #050505;

  h1 {
    font-size: 50px;
    margin-bottom: 35px;

    color: #fff;

    letter-spacing: 3px;

    text-shadow: 0 0 15px rgba(246, 243, 243, 0.3);
  }

  input {
    width: 400px;
    height: 55px;

    padding: 0 15px;

    background: #141414;

    border: 1px solid #333;

    color: white;

    font-size: 16px;

    transition: 0.3s;

    &:focus {
      outline: none;

      border-color: #ffffff;

      box-shadow: 0 0 12px rgba(246, 243, 243, 0.3);
    }

    &::placeholder {
      color: #777;
      letter-spacing: 1px;
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;

  width: 400px;

  margin-bottom: 15px;
`

export const EyeIcon = styled.span`
  position: absolute;

  right: 15px;
  top: 50%;

  transform: translateY(-50%);

  cursor: pointer;

  color: #888;

  font-size: 20px;

  transition: 0.3s;

  &:hover {
    color: #ff2b2b;
  }
`

export const RegisterLink = styled.p`
  margin-top: 20px;

  color: #777;

  font-size: 14px;

  letter-spacing: 1px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: #ff2b2b;
  }
`