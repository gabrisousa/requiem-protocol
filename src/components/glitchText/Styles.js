import styled, { keyframes } from 'styled-components'

const glitch = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-1px, 1px);
  }

  40% {
    transform: translate(-1px, -1px);
  }

  60% {
    transform: translate(1px, 1px);
  }

  80% {
    transform: translate(1px, -1px);
  }

  100% {
    transform: translate(0);
  }
`

export const Text = styled.h1`
  position: relative;

  color: #f5f5f5;

  letter-spacing: 4px;

  animation: ${glitch} 2s infinite;

  &::before,
  &::after {
    content: attr(data-text);

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    overflow: hidden;

    opacity: 0.15;
  }

  &::before {
    transform: translate(-2px, 0);
  }

  &::after {
    transform: translate(2px, 0);
  }
`