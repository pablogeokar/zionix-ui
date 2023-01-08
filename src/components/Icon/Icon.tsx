
import { IconsType } from './IconsType';

interface IconProps extends IconsType {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
}

export default function Icon({ iconName, weight = 'thin', size = 28 }: IconProps) {
  try {
    const PhosphorIcon = require(`../../../../phosphor-react`)[iconName]

    return (
      <>
        {PhosphorIcon && <PhosphorIcon size={size} weight={weight} />}
      </>
    )
  } catch {
    //const DevPhosphorIcon = require(`../../node_modules/phosphor-react`)[iconName] || null
    return (
      <>
      ❌
        {/** modo link em ambiente de desenvolvedor */}
        {/* DevPhosphorIcon && <DevPhosphorIcon size={size} weight={weight} />*/}
      </>

    )
  }

}