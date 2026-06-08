import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  CaixaPrincipal, Containerstatus, Background } from './Styles'
import { Botao } from '../../components/Styles'

function Dashboard() {
  const navigate = useNavigate()
  

  return (
    <Background>

      <CaixaPrincipal>
        <h1>REQUIEM PROTOCOL</h1>
        <p>Umbrella Investigation System</p>

        <Botao onClick={() => navigate('/login')}>
          [ ACCESS SYSTEM ]
        </Botao>

        <Containerstatus>
        <span>⚠️ BIOHAZARD LEVEL 3</span>
        <span>🟢 SYSTEM ONLINE</span>
        <span>🔗 DATA LINK ESTABLISHED</span>
      </Containerstatus>

      </CaixaPrincipal>

  
      

    </Background>
  )
}

export default Dashboard