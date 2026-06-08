import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #050505;
`

export const RegisterCard = styled.div`
  width: 420px;
  padding: 40px;
  border: 1px solid #1f1f1f;
  background: rgba(10, 10, 10, 0.95);
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.15);

  h1 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 3px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;

  background: #111;
  border: 1px solid #333;

  color: #fff;
  font-size: 14px;

  outline: none;
  transition: 0.3s;

  &::placeholder {
    color: #777;
  }

  &:focus {
    border-color: #ff2b2b;
    box-shadow: 0 0 10px rgba(255, 43, 43, 0.3);
  }
`

export const RegisterButton = styled.button`
  width: 100%;
  padding: 14px;

  background: #ff2b2b;
  border: none;

  color: white;
  font-weight: bold;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255, 43, 43, 0.5);
  }
`

export const LoginLink = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #ff2b2b;
  }
`

export const BackButton = styled.button`
  position: absolute;

  top: 30px;
  left: 30px;

  background: transparent;
  border: none;

  color: white;

  font-size: 28px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: #ff2b2b;
    transform: translateX(-4px);
  }
`