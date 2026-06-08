import { Text } from './Styles'

function GlitchText({ children }) {
  return (
    <Text data-text={children}>
      {children}
    </Text>
  )
}

export default GlitchText