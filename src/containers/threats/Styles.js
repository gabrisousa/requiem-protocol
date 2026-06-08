import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #050505;
`

export const Content = styled.div`
  flex: 1;
  padding: 40px;

  overflow-x: hidden;
`

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    letter-spacing: 4px;
  }

  p {
    color: #7a7a7a;
    margin-top: 10px;
    letter-spacing: 2px;
  }
`

export const ThreatGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 25px;
`

export const ThreatCard = styled.div`
  background: rgba(10, 10, 10, 0.95);

  border: 1px solid
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};

  padding: 25px;

  position: relative;

  overflow: hidden;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);

    box-shadow:
      0 0 20px rgba(255,255,255,0.05);
  }

  .top {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 25px;
  }

  .icon {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background:
      ${({ level }) =>
        level === 'critical'
          ? 'rgba(255,59,59,0.12)'
          : level === 'warning'
          ? 'rgba(255,193,7,0.12)'
          : 'rgba(109,255,122,0.12)'};

    svg {
      font-size: 28px;

      color:
        ${({ level }) =>
          level === 'critical'
            ? '#ff3b3b'
            : level === 'warning'
            ? '#ffc107'
            : '#6dff7a'};
    }
  }

  h2 {
    margin-bottom: 10px;

    font-size: 24px;

    letter-spacing: 2px;
  }

  span {
    color: #8a8a8a;

    font-size: 14px;

    letter-spacing: 1px;
  }

  .infection {
    margin-top: 30px;

    padding-top: 20px;

    border-top: 1px solid #1a1a1a;

    display: flex;

    align-items: center;

    justify-content: space-between;

    p {
      color: #777;

      font-size: 13px;

      letter-spacing: 2px;
    }

    strong {
      font-size: 24px;

      color:
        ${({ level }) =>
          level === 'critical'
            ? '#ff3b3b'
            : level === 'warning'
            ? '#ffc107'
            : '#6dff7a'};
    }
  }
`

export const Status = styled.div`
  padding: 6px 14px;

  border-radius: 4px;

  font-size: 11px;

  font-weight: bold;

  letter-spacing: 2px;

  background:
    ${({ level }) =>
      level === 'critical'
        ? 'rgba(255,59,59,0.12)'
        : level === 'warning'
        ? 'rgba(255,193,7,0.12)'
        : 'rgba(109,255,122,0.12)'};

  color:
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};

  border: 1px solid
    ${({ level }) =>
      level === 'critical'
        ? '#ff3b3b'
        : level === 'warning'
        ? '#ffc107'
        : '#6dff7a'};
`