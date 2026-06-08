import styled from 'styled-components'

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  background: #0f0f0f;
  border-right: 1px solid #1f1f1f;
  padding: 20px;

  display: flex;
  flex-direction: column;
`

export const Logo = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  letter-spacing: 2px;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  margin-bottom: 10px;

  color: ${({ active }) => (active ? '#fff' : '#888')};
  border: 1px solid ${({ active }) => (active ? '#ff2c2c' : 'transparent')};

  cursor: pointer;
  transition: 0.2s;

  svg {
    font-size: 18px;
  }

  &:hover {
    color: #fff;
    border-color: #ff2c2c;
  }
`