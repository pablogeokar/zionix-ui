import { cssValidation } from '../../helpers'
import css from './Hr.module.scss'

interface HrProps {
  minimal?: boolean
}

export default function Hr({ minimal }: HrProps) {
  const styles = cssValidation([
    { name: css.Hr, validation: true },
    { name: css['Hr--minimal'], validation: minimal === true }
  ])
  return (
    <hr className={styles} />
  )
}