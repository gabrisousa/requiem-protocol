import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const loading = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.6;
  }
`

export const Screen = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background: #050505;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 99999;

  animation: ${fade} 1s ease;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    margin-bottom: 25px;

    opacity: 0.9;

    animation: ${pulse} 3s infinite;
  }

  h1 {
    font-size: 18px;
    letter-spacing: 4px;
    font-weight: 400;

    color: #e5e5e5;
  }
`

export const LoadingText = styled.p`
  margin-top: 30px;

  color: #777;

  letter-spacing: 3px;
  font-size: 12px;
`

export const BarContainer = styled.div`
  width: 260px;
  height: 3px;

  background: #111;

  margin-top: 30px;

  overflow: hidden;
`

export const Progress = styled.div`
  height: 100%;

  background: #f5f5f5;

  animation: ${loading} 3s linear forwards;
`