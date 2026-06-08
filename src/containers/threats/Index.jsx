import Sidebar from '../sidebar/Index'
import { motion } from 'framer-motion'
import GlitchText from '../../components/glitchText/Index.jsx'
import threats from '../../data/threats.jsx'


import {
  Layout,
  Content,
  Header,
  ThreatGrid,
  ThreatCard,
  Status
} from './Styles'

import {
  GiBiohazard,
  GiVirus,
  GiHazardSign
} from 'react-icons/gi'

function Threats() {

  

  const renderIcon = (icon) => {
    switch (icon) {
      case 'virus':
        return <GiVirus />

      case 'biohazard':
        return <GiBiohazard />

      case 'hazard':
        return <GiHazardSign />

      default:
        return <GiVirus />
    }
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
            BIOHAZARD THREATS
          </GlitchText>
          <p>Umbrella contamination monitoring system</p>
        </Header>

        <ThreatGrid>

          {
  threats.map((threat) => (

    <ThreatCard
      key={threat.id}
      level={threat.level}
    >

      <div className="top">

        <div className="icon">
          {threat.icon}
        </div>

        <Status level={threat.level}>
          {threat.status}
        </Status>

      </div>

      <h2>{threat.name}</h2>

      <span>
        LOCATION: {threat.location}
      </span>

      <div className="infection">

        <p>INFECTION RATE</p>

        <strong>
          {threat.infection}
        </strong>

      </div>

    </ThreatCard>
  ))
}

        </ThreatGrid>
      </Content>
    </Layout>
  )
}

export default Threats