import styled from 'styled-components'

export const Background = styled.div`
  

`;


    
    
export const BackgroundPhoto = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;

`;

export const CaixaPrincipal = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 50px;
    }
    
    p {
        font-size: 20px;
    }
`;


export const Containerstatus = styled.div`
    position: absolute;
    display: flex;
    gap: 10px;
    padding: 30px;
    flex-direction: column;
    margin-top: 445px;
    align-self: flex-start;
    
    
    
    
    
`;



export const NoiseOverlay = styled.div`
 
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  background-image: url('https://grainy-gradients.vercel.app/noise.svg');
  opacity: 0.05;
  z-index: 1;
`



  