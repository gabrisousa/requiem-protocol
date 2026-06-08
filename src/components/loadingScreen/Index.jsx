import {
  Screen,
  Logo,
  LoadingText,
  BarContainer,
  Progress
} from './Styles'

function LoadingScreen() {
  return (
    <Screen>

      <Logo>
        <img
          src="/public/favicon.png"
          alt="Umbrella Logo"
        />

        <h1>UMBRELLA CORPORATION</h1>
      </Logo>

      <LoadingText>
        INITIALIZING REQUIEM PROTOCOL...
      </LoadingText>

      <BarContainer>
        <Progress />
      </BarContainer>

    </Screen>
  )
}

export default LoadingScreen