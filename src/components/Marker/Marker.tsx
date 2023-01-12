import styles from './Marker.module.scss'
import { cssValidation, /*cssValidationProps*/ } from '../../helpers'

interface MarkerProps {
  color?: string
  size?: number
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}

export default function Marker({ primary, secondary, accent, success, warning, error, color, size = 20 }: MarkerProps) {

  const css = cssValidation([
    { name: styles.Marker, validation: true },
    { name: styles.primary, validation: primary === true },
    { name: styles.secondary, validation: secondary === true },
    { name: styles.accent, validation: accent === true },
    { name: styles.success, validation: success === true },
    { name: styles.warning, validation: warning === true },
    { name: styles.error, validation: error === true },
  ])



  return (
    <div className={css} style={{ background: color, width: size, height: size }} />
  )
}