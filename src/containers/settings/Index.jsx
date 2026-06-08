import { useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '../../components/glitchText/Index.jsx'

import Sidebar from '../sidebar/Index'

import {
  Layout,
  Content,
  Header,
  SettingsContainer,
  SettingCard,
  SettingInfo,
  Toggle
} from './Styles'

function Settings() {
  const [security, setSecurity] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [monitoring, setMonitoring] = useState(false)
  const [lockdown, setLockdown] = useState(false)

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
            SYSTEM SETTINGS
          </GlitchText>
          <p>Umbrella Corporation control panel</p>
        </Header>

        <SettingsContainer>

          <SettingCard>
            <SettingInfo>
              <h2>Security Protocol</h2>
              <span>
                Advanced protection systems enabled.
              </span>
            </SettingInfo>

            <Toggle
              active={security}
              onClick={() => setSecurity(!security)}
            >
              <div />
            </Toggle>
          </SettingCard>

          <SettingCard>
            <SettingInfo>
              <h2>Notifications</h2>
              <span>
                Receive real-time incident alerts.
              </span>
            </SettingInfo>

            <Toggle
              active={notifications}
              onClick={() => setNotifications(!notifications)}
            >
              <div />
            </Toggle>
          </SettingCard>

          <SettingCard>
            <SettingInfo>
              <h2>Virus Monitoring</h2>
              <span>
                Continuous biological activity tracking.
              </span>
            </SettingInfo>

            <Toggle
              active={monitoring}
              onClick={() => setMonitoring(!monitoring)}
            >
              <div />
            </Toggle>
          </SettingCard>

          <SettingCard danger>
            <SettingInfo>
              <h2>Emergency Lockdown</h2>
              <span>
                Restrict all sector access immediately.
              </span>
            </SettingInfo>

            <Toggle
              danger
              active={lockdown}
              onClick={() => setLockdown(!lockdown)}
            >
              <div />
            </Toggle>
          </SettingCard>

        </SettingsContainer>
      </Content>
    </Layout>
  )
}

export default Settings