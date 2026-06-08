import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #fff;
  padding: 40px;
`

export const Header = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 28px;
    letter-spacing: 2px;
  }

  p {
    color: #777;
    margin-top: 5px;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`

export const Card = styled.div`
  flex: 1;
  background: #141414;
  border: 1px solid #ffffff;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  span {
    font-size: 12px;
    color: #aaa;
    letter-spacing: 1px;
  }
`

export const Events = styled.div`
  background: #141414;
  border: 1px solid #ffffff;
  padding: 30px;

  h3 {
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 10px;
    color: #ccc;
  }
`

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: #0a0a0a;
`

export const Content = styled.div`
  flex: 1;
  padding: 40px;
  color: #fff;
  width: 100%;
overflow-x: hidden;
`


export const ChartContainer = styled.div`
  margin-top: 40px;

  background: rgba(10, 10, 10, 0.92);

  border: 1px solid #1a1a1a;

  padding: 20px;

  position: relative;

  overflow: hidden;

  h2 {
    margin-bottom: 20px;

    font-size: 16px;

    letter-spacing: 3px;

    color: #d1d1d1;
  }
`

export const ActivityFeed = styled.div`
  margin-top: 40px;

  background: rgba(10, 10, 10, 0.92);

  border: 1px solid #1a1a1a;

  padding: 20px;

  h2 {
    margin-bottom: 20px;

    font-size: 16px;

    letter-spacing: 3px;
  }
`

export const FeedItem = styled.div`
  display: flex;

  align-items: center;

  gap: 15px;

  padding: 14px 0;

  border-bottom: 1px solid #1a1a1a;

  span {
    font-size: 13px;

    color:
      ${({ type }) =>
        type === 'critical'
          ? '#ff3b3b'
          : type === 'warning'
          ? '#ffc107'
          : '#6dff7a'};
  }

  p {
    color: #d1d1d1;

    letter-spacing: 1px;
  }
`


export const CameraGrid = styled.div`
  margin-top: 40px;

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));

  gap: 20px;
`

export const CameraCard = styled.div`
  background: #0a0a0a;

  border: 1px solid #1a1a1a;

  overflow: hidden;

  .screen {
    height: 180px;

    position: relative;

    background:
      ${({ status }) =>
        status === 'ONLINE'
          ? 'linear-gradient(to bottom, #101010, #050505)'
          : '#120909'};

    display: flex;

    align-items: center;

    justify-content: center;

    overflow: hidden;

    span {
      z-index: 2;

      font-size: 14px;

      letter-spacing: 3px;

      color:
        ${({ status }) =>
          status === 'ONLINE'
            ? '#6dff7a'
            : '#ff3b3b'};
    }
  }

  .overlay {
    position: absolute;

    width: 100%;
    height: 100%;

    background:
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.03),
        rgba(255,255,255,0.03) 2px,
        transparent 2px,
        transparent 4px
      );

    opacity: 0.3;
  }

  .info {
    padding: 15px;

    h3 {
      margin-bottom: 8px;

      letter-spacing: 2px;
    }

    p {
      color: #777;

      font-size: 13px;
    }
  }

  .camera-top {
    position: absolute;

    top: 10px;
    left: 10px;
    right: 10px;

    z-index: 3;

    display: flex;

    align-items: center;

    justify-content: space-between;
  }

  .rec {
    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 12px;

    letter-spacing: 2px;

    color: #fff;
  }

  .dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #ff3b3b;

    animation: blink 1s infinite;
  }

  .timer {
    font-size: 11px;

    letter-spacing: 2px;

    color: #d1d1d1;
  }

  .status {
    z-index: 2;

    font-size: 14px;

    letter-spacing: 3px;

    color:
      ${({ status }) =>
        status === 'ONLINE'
          ? '#6dff7a'
          : '#ff3b3b'};
  }

  .overlay {
    position: absolute;

    width: 100%;
    height: 100%;

    background:
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.03),
        rgba(255,255,255,0.03) 2px,
        transparent 2px,
        transparent 4px
      );

    opacity: 0.3;
  }

  .info {
    padding: 15px;

    h3 {
      margin-bottom: 8px;

      letter-spacing: 2px;
    }

    p {
      color: #777;

      font-size: 13px;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }

  &:hover {
  transform: translateY(-4px);

  border-color: #2a2a2a;

  box-shadow:
    0 0 25px rgba(255,255,255,0.04);
}
`