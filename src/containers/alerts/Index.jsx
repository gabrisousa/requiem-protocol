import { useEffect, useState } from 'react'
import Sidebar from '../../containers/sidebar/Index'
import { motion } from 'framer-motion'
import GlitchText from '../../components/glitchText/Index.jsx'

import {
  Layout,
  Content,
  Header,
  AlertContainer,
  AlertCard,
  Status,
  Time,
  DeleteButton,
  EditButton,
  Overlay,
  Modal,
  ModalActions,
  CancelButton,
  ConfirmButton,
  Input,
  TextArea,
  Select
} from './Styles'

function Alerts() {

  const [showEditModal, setShowEditModal] = useState(false)

const [editTitle, setEditTitle] = useState('')
const [editDescription, setEditDescription] = useState('')
const [editLevel, setEditLevel] = useState('')

  const [showDeleteModal, setShowDeleteModal] = useState(false)

const [selectedAlert, setSelectedAlert] = useState(null)

  const [alerts, setAlerts] = useState([])

  const confirmDelete = async () => {

  await handleDelete(
    selectedAlert._id
  )

  setShowDeleteModal(false)

  setSelectedAlert(null)

}

  useEffect(() => {

    

  const token = localStorage.getItem('token')

  fetch('http://localhost:3001/alerts', {

    headers: {
      Authorization: token
    }

  })

    .then((response) => response.json())

    .then((data) => {

      console.log(data)

      setAlerts(data)

    })

}, [])

const handleEdit = async () => {

  const token = localStorage.getItem('token')

  const response = await fetch(
    `http://localhost:3001/alerts/${selectedAlert._id}`,
    {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },

      body: JSON.stringify({

        title: editTitle,
        description: editDescription,
        level: editLevel

      })
    }
  )

  const updatedAlert = await response.json()

  setAlerts(

    alerts.map((alert) =>

      alert._id === updatedAlert._id
        ? updatedAlert
        : alert

    )

  )

  setShowEditModal(false)

}


const handleDelete = async (id) => {

  const token = localStorage.getItem('token')

  await fetch(
    `http://localhost:3001/alerts/${id}`,
    {
      method: 'DELETE',

      headers: {
        Authorization: token
      }
    }
  )

  setAlerts(
    alerts.filter(
      (alert) => alert._id !== id
    )
  )

}



  return (
    <Layout>
      <Sidebar />

      <Content
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
      >
        <Header>
          <GlitchText>
            ALERT SYSTEM
          </GlitchText>

          <p>
            Real-time Umbrella incident monitoring
          </p>
        </Header>

        <AlertContainer>

          {
            alerts.map((alert) => (
              <AlertCard
                key={alert.id}
                level={alert.level}
              >

                <div className="top">

                  <Status level={alert.level}>
                    {alert.type}
                  </Status>

                  <Time>
                    {alert.time}
                  </Time>

                </div>

                <div className="content">

                  {alert.icon}

                  <div>

  <h2>{alert.title}</h2>

  <span>
    {alert.description}
  </span>

  <p
    style={{
      marginTop: '10px',
      color: '#888',
      fontSize: '13px'
    }}
  >
    Created by: {alert.createdBy}
  </p>

</div>

                </div>

                <DeleteButton
  onClick={() => {

    setSelectedAlert(alert)

    setShowDeleteModal(true)

  }}
>
  DELETE
</DeleteButton>

<EditButton
  onClick={() => {
    setSelectedAlert(alert)

    setEditTitle(alert.title)

  setEditDescription(alert.description)

  setEditLevel(alert.level)

    setShowEditModal(true)
  }}
>
  EDIT
</EditButton>

              </AlertCard>
            ))
          }

        </AlertContainer>

        {
  showDeleteModal && (

    <Overlay>

      <Modal>

        <h2>DELETE ALERT</h2>

        <p>
          Are you sure you want to delete this incident?
        </p>

        <ModalActions>

          <CancelButton
            onClick={() => {

              setShowDeleteModal(false)

              setSelectedAlert(null)

            }}
          >
            CANCEL
          </CancelButton>

          <ConfirmButton
            onClick={confirmDelete}
          >
            DELETE
          </ConfirmButton>

        </ModalActions>

      </Modal>

    </Overlay>

  )
}

{
  showEditModal && (

    <Overlay>

      <Modal>

        <h2>EDIT ALERT</h2>

        <Input
          value={editTitle}
          onChange={(e) =>
            setEditTitle(e.target.value)
          }
        />

        <TextArea
          value={editDescription}
          onChange={(e) =>
            setEditDescription(e.target.value)
          }
        />

        <Select
          value={editLevel}
          onChange={(e) =>
            setEditLevel(e.target.value)
          }
        >

          <option value="critical">
            CRITICAL
          </option>

          <option value="warning">
            WARNING
          </option>

          <option value="safe">
            SAFE
          </option>

        </Select>

        <ModalActions>

          <CancelButton
            onClick={() =>
              setShowEditModal(false)
            }
          >
            CANCEL
          </CancelButton>

          <ConfirmButton
            onClick={handleEdit}
          >
            SAVE
          </ConfirmButton>

        </ModalActions>

      </Modal>

    </Overlay>

  )
}
      </Content>
    </Layout>
  )
}

export default Alerts