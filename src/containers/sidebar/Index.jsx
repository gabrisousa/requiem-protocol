import { Container, MenuItem, Logo } from './Styles'
import { FiGrid, FiAlertTriangle, FiSettings, FiLogOut, FiPlusCircle } from 'react-icons/fi'
import { GiBiohazard } from 'react-icons/gi'
import { useNavigate, useLocation } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {

  localStorage.removeItem('token')

  navigate('/login')

}

  return (
    <Container>
      <Logo>REQUIEM</Logo>

      <MenuItem
        active={location.pathname === '/dashboard'}
        onClick={() => navigate('/dashboard')}
      >
        <FiGrid /> Dashboard
      </MenuItem>

      <MenuItem
        active={location.pathname === '/threats'}
        onClick={() => navigate('/threats')}
      >
        <GiBiohazard /> Threats
      </MenuItem>

      <MenuItem
        active={location.pathname === '/alerts'}
        onClick={() => navigate('/alerts')}
      >
        <FiAlertTriangle /> Alerts
      </MenuItem>

      <MenuItem
  active={location.pathname === '/new-alert'}
  onClick={() => navigate('/new-alert')}
>
  <FiPlusCircle /> New Alert
</MenuItem>

      <MenuItem
        active={location.pathname === '/settings'}
        onClick={() => navigate('/settings')}
      >
        <FiSettings /> Settings
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <FiLogOut /> Logout
      </MenuItem>

    </Container>
  )
}

export default Sidebar