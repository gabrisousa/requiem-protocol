import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  EyeIcon,
  InputWrapper,
  LoginUser,
  RegisterLink
} from './Styles'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { Botao } from '../../components/Styles'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {

    if (!username || !password) {
      setError('Preencha todos os campos')
      return
    }

    try {

      const response = await fetch(
        'http://localhost:3001/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        return
      }

      localStorage.setItem('token', data.token)

      navigate('/dashboard')

    } catch (error) {

      setError('Erro ao conectar com servidor')

    }

  }

  return (
    <LoginUser>

      <h1>REQUIEM PROTOCOL</h1>

      <InputWrapper>
        <input
          type="text"
          placeholder="USERNAME"
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />

        <EyeIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </EyeIcon>
      </InputWrapper>

      {error && (
        <p style={{ color: '#ff2b2b', marginTop: '15px' }}>
          {error}
        </p>
      )}

      <Botao onClick={handleLogin}>
        LOGIN
      </Botao>

      <RegisterLink
        onClick={() => navigate('/register')}
      >
        CREATE ACCOUNT
      </RegisterLink>

    </LoginUser>
  )
}

export default Login