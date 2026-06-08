import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #090909;
  color: #fff;
`

export const Content = styled.div`
  flex: 1;
  padding: 40px;
`

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 32px;
    letter-spacing: 2px;
  }

  p {
    color: #777;
    margin-top: 10px;
  }
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SettingCard = styled.div`
  background: #101010;

  border: 1px solid
    ${({ danger }) => (danger ? '#3a1010' : '#1f1f1f')};

  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s;

  &:hover {
    border-color: ${({ danger }) =>
      danger ? '#ff2c2c' : '#444'};
  }
`

export const SettingInfo = styled.div`
  h2 {
    margin-bottom: 8px;
    letter-spacing: 1px;
  }

  span {
    color: #777;
    font-size: 14px;
  }
`

export const Toggle = styled.div`
  width: 60px;
  height: 30px;

  background: ${({ active, danger }) => {
    if (active && danger) return '#ff2c2c'
    if (active) return '#00ff88'
    return '#333'
  }};

  border: 1px solid
    ${({ active, danger }) => {
      if (active && danger) return '#ff2c2c'
      if (active) return '#00ff88'
      return '#444'
    }};

  border-radius: 30px;

  padding: 3px;

  cursor: pointer;

  transition: 0.3s;

  display: flex;
  align-items: center;

  div {
    width: 20px;
    height: 20px;

    background: #fff;
    border-radius: 50%;

    transform: ${({ active }) =>
      active ? 'translateX(28px)' : 'translateX(0)'};

    transition: 0.3s;
  }
`