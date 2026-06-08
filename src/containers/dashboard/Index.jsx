import Sidebar from '../sidebar/Index.jsx'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '../../components/glitchText/Index.jsx'
import InfectionChart from '../../components/infectionChart/'
import activity from '../../data/activity.js'
import cameras from '../../data/cameras'

import {
  Layout,
  Content,
  Header,
  Cards,
  Card,
  Events,
  ChartContainer,
  ActivityFeed,
  FeedItem,
  CameraGrid,
  CameraCard
} from './Styles'

import { GiBiohazard, GiTestTubes, GiSkullCrossedBones } from 'react-icons/gi'
import { FiAlertTriangle, FiLock, FiCheckCircle } from 'react-icons/fi'
import { Botao2 } from '../../components/Styles.js'

function Dashboard() {

  const [recentAlerts, setRecentAlerts] = useState([])

  const [stats, setStats] = useState({

  total: 0,
  critical: 0,
  warning: 0

})

useEffect(() => {

  const token = localStorage.getItem('token')

  fetch(
    'http://localhost:3001/alerts',
    {
      headers: {
        Authorization: token
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {

      const critical = data.filter(
        alert => alert.level === 'critical'
      ).length

      const warning = data.filter(
        alert => alert.level === 'warning'
      ).length

      setStats({

        total: data.length,

        critical,

        warning

      })

      setRecentAlerts(
  data.slice(-5).reverse()
)

    })

}, [])


  const [username, setUsername] = useState('')

  useEffect(() => {

    const token = localStorage.getItem('token')

    fetch('http://localhost:3001/me', {
      headers: {
        Authorization: token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setUsername(data.user.username)
      })

  }, [])





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

  <div>

    <GlitchText>
      UMBRELLA CONTROL SYSTEM
    </GlitchText>

    <p>REQUIEM PROTOCOL ACTIVE</p>

  </div>

  <div>

    <span>
      OPERATOR: {username.toUpperCase()}
    </span>

  </div>

</Header>

        <Cards>
          <Card>
            <GiBiohazard size={24} />
            <h2>{stats.total}</h2>
            <span>ACTIVE THREATS</span>
          </Card>

          <Card>
            <FiAlertTriangle size={24} />
            <h2>{stats.warning}</h2>
            <span>CONTAINED</span>
          </Card>

          <Card>
            <GiSkullCrossedBones size={24} />
            <h2>{stats.critical}</h2>
            <span>NEUTRALIZED</span>
          </Card>
        </Cards>
        <ChartContainer>

       <h2>INFECTION ACTIVITY</h2>

       <InfectionChart />

         </ChartContainer>
         <Events>
          <h3>RECENT EVENTS</h3>

          <ul>

  {
    recentAlerts.map((alert) => (

      <li key={alert._id}>

        <FiAlertTriangle />

        {alert.title}

      </li>

    ))
  }

</ul>
        </Events>

        

         <ActivityFeed>

  <h2>LIVE ACTIVITY</h2>

  {
    activity.map((item) => (

      <FeedItem
        key={item.id}
        type={item.type}
      >

        <span>[{item.time}]</span>

        <p>{item.message}</p>

      </FeedItem>
    ))
  }

</ActivityFeed>


<CameraGrid>

  {
    cameras.map((camera) => (

      <CameraCard
        key={camera.id}
        status={camera.status}
      >

        <div className="screen">

  <div className="camera-top">

    <div className="rec">
      <div className="dot" />
      REC
    </div>

    <span className="timer">
      00:14:22
    </span>

  </div>

  <div className="overlay" />

  <span className="status">
    {camera.status}
  </span>

</div>

      </CameraCard>
    ))
  }

</CameraGrid>
        

        
      </Content>

    </Layout>
  )
}

export default Dashboard