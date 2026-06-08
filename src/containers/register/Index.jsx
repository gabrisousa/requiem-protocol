import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, RegisterCard, Input, RegisterButton, LoginLink, BackButton } from './Styles'
import { FiArrowLeft } from 'react-icons/fi'


function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async () => {

    const response = await fetch(
      'http://localhost:3001/register',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    )

    if (response.ok) {
      navigate('/login')
    }

  }

  return (
    <Container>

      <BackButton onClick={() => navigate(-1)}>
  <FiArrowLeft />
</BackButton>


  <RegisterCard>

    <h1>REQUIEM REGISTER</h1>

    <Input
      placeholder="USERNAME"
      onChange={(e) => setUsername(e.target.value)}
    />

    <Input
      placeholder="EMAIL"
      onChange={(e) => setEmail(e.target.value)}
    />

    <Input
      type="password"
      placeholder="PASSWORD"
      onChange={(e) => setPassword(e.target.value)}
    />

    <RegisterButton onClick={handleRegister}>
      CREATE ACCOUNT
    </RegisterButton>

  </RegisterCard>
</Container>
  )
}

export default Register