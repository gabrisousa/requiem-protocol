import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #070707;
`

export const Content = styled.div`
  flex: 1;
  padding: 40px;
`

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    letter-spacing: 4px;
  }

  p {
    color: #8a8a8a;
    margin-top: 10px;
    letter-spacing: 2px;
  }
`

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const AlertCard = styled.div`
  background: rgba(15, 15, 15, 0.95);

  border: 1px solid #1a1a1a;

  border-left: 4px solid
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};

  padding: 20px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    border-color: #2a2a2a;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      font-size: 28px;

      color:
        ${({ level }) =>
          level === 'critical'
            ? '#ff3b3b'
            : level === 'warning'
            ? '#ffc107'
            : '#6dff7a'};
    }

    h2 {
      font-size: 18px;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }

    span {
      color: #8a8a8a;
      font-size: 14px;
    }
  }
`

export const Status = styled.div`
  padding: 6px 14px;

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;

  border-radius: 4px;

  background:
    ${({ level }) =>
      level === 'critical'
        ? 'rgba(255, 59, 59, 0.12)'
        : level === 'warning'
        ? 'rgba(255, 193, 7, 0.12)'
        : 'rgba(109, 255, 122, 0.12)'};

  color:
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};

  border: 1px solid
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};
`

export const Time = styled.span`
  color: #777;
  font-size: 13px;
  letter-spacing: 1px;
`

export const DeleteButton = styled.button`
  margin-top: 15px;

  padding: 10px 15px;

  border: 1px solid #ff2b2b;

  background: transparent;

  color: #ff2b2b;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #ff2b2b;
    color: white;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.8);

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

  box-shadow: 0 0 30px rgba(255, 43, 43, 0.25);

  h2 {
    color: #ff2b2b;
    margin-bottom: 15px;
  }

  p {
    color: white;
    margin-bottom: 25px;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const CancelButton = styled.button`
  padding: 12px 20px;

  background: transparent;

  border: 1px solid #666;

  color: white;

  cursor: pointer;
`

export const ConfirmButton = styled.button`
  padding: 12px 20px;

  background: #ff2b2b;

  border: none;

  color: white;

  cursor: pointer;
`

export const EditButton = styled.button`
  margin-top: 10px;
  margin-left: 10px;

  padding: 10px 15px;

  border: 1px solid #3b82f6;

  background: transparent;

  color: #3b82f6;

  cursor: pointer;

  transition: .3s;

  &:hover {
    background: #3b82f6;
    color: white;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;

  background: #111;
  border: 1px solid #333;

  color: white;

  outline: none;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;

  padding: 12px;
  margin-bottom: 15px;

  background: #111;
  border: 1px solid #333;

  color: white;

  resize: none;

  outline: none;
`

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;

  background: #111;
  border: 1px solid #333;

  color: white;

  outline: none;
`