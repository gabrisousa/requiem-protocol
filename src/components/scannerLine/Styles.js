import styled, { keyframes } from 'styled-components'

const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100vh);
  }
`

export const Line = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 120px;

  pointer-events: none;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );

  animation: ${scan} 6s linear infinite;

  z-index: 999;
`