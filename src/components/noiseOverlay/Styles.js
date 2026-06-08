import styled, { keyframes } from 'styled-components'

const noise = keyframes`
  0% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
  100% { transform: translate(0, 0); }
`

export const Noise = styled.div`
  position: fixed;

  top: -50%;
  left: -50%;

  width: 200%;
  height: 200%;

  pointer-events: none;

  opacity: 0.035;

  z-index: 998;

  background-image:
    radial-gradient(#ffffff 1px, transparent 1px);

  background-size: 4px 4px;

  animation: ${noise} 0.3s infinite;
`