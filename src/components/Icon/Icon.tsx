
import { IconsType } from './IconsType';

interface IconProps extends IconsType {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
  className?: string;
}

export default function Icon({ iconName, className, weight = 'thin', size = 28 }: IconProps) {
  if (!iconName) {
    return (
      null
    )
  }

  try {
    const PhosphorIcon = require(`../../../../phosphor-react`)[iconName]

    return (
      <div className={className}>
        {PhosphorIcon && <PhosphorIcon size={size} weight={weight} />}
      </div>
    )

  } catch {
    //const DevPhosphorIcon = require(`../../node_modules/phosphor-react`)[iconName]

    return (
      <div className={className}>
        ❌
        {/**❌ modo link em ambiente de desenvolvedor */}
        {/*DevPhosphorIcon && <DevPhosphorIcon size={size} weight={weight} />*/}
      </div>
    )
  }

}