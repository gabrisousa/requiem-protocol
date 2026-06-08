import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


import {
  Container,
  FormCard,
  Input,
  TextArea,
  Select,
  Button,
  BackButton,
  Overlay,
  Modal,
  ModalButton
} from './Styles'

function NewAlert() {

  const [showSuccess, setShowSuccess] = useState(false)

  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('')

  const handleSubmit = async () => {

    const token = localStorage.getItem('token')

    const alertData = {

      type,
      title,
      description,
      level,
      time: new Date().toLocaleTimeString()

    }

    await fetch(
      'http://localhost:3001/alerts',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },

        body: JSON.stringify(alertData)
      }
    )

    setShowSuccess(true)

    setType('')
    setTitle('')
    setDescription('')
    setLevel('')

  }

  return (
    <Container>

      <BackButton onClick={() => navigate(-1)}>
  <FiArrowLeft />
</BackButton>

      <FormCard>

        <h1>CREATE INCIDENT</h1>

        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">SELECT TYPE</option>
          <option value="VIRUS">VIRUS</option>
          <option value="BREACH">BREACH</option>
          <option value="MUTATION">MUTATION</option>
          <option value="EXPERIMENT">EXPERIMENT</option>
        </Select>

        <Input
          value={title}
          placeholder="TITLE"
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextArea
          value={description}
          placeholder="DESCRIPTION"
          onChange={(e) => setDescription(e.target.value)}
        />

        <Select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">SELECT LEVEL</option>
          <option value="critical">CRITICAL</option>
          <option value="warning">WARNING</option>
          <option value="safe">SAFE</option>
        </Select>

        <Button onClick={handleSubmit}>
          CREATE ALERT
        </Button>

      </FormCard>

      {
  showSuccess && (

    <Overlay>

      <Modal>

        <h2>✓ ALERT CREATED</h2>

        <p>
          Incident registered successfully.
        </p>

        <ModalButton
          onClick={() => setShowSuccess(false)}
        >
          CONTINUE
        </ModalButton>

      </Modal>

    </Overlay>

  )
}

    </Container>
  )
}

export default NewAlert