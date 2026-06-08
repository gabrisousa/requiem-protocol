import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #050505;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`

export const FormCard = styled.div`
  width: 100%;
  max-width: 600px;

  background: rgba(10, 10, 10, 0.95);

  border: 1px solid #222;

  padding: 40px;

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

  color: white;
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

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;

  padding: 14px;
  margin-bottom: 15px;

  resize: vertical;

  background: #111;
  border: 1px solid #333;

  color: white;
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

export const Select = styled.select`
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;

  background: #111;
  border: 1px solid #333;

  color: white;
  font-size: 14px;

  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #ff2b2b;
    box-shadow: 0 0 10px rgba(255, 43, 43, 0.3);
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 14px;

  border: none;

  background: #ff2b2b;

  color: white;
  font-size: 15px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255, 43, 43, 0.5);
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

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`

export const Modal = styled.div`
  width: 400px;

  background: #0a0a0a;

  border: 1px solid #ff2b2b;

  padding: 30px;

  text-align: center;

  box-shadow: 0 0 30px rgba(255, 43, 43, 0.3);

  h2 {
    color: #ff2b2b;
    margin-bottom: 15px;
  }

  p {
    color: white;
    margin-bottom: 20px;
  }
`

export const ModalButton = styled.button`
  padding: 12px 25px;

  border: none;

  background: #ff2b2b;

  color: white;

  cursor: pointer;

  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`