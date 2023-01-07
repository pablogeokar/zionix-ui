
import { IconsType } from './IconsType';

interface IconProps extends IconsType {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
}

export default function Icon({ iconName, weight = 'thin', size = 28 }: IconProps) {

  const PhosphorIcon = require(`../../../../phosphor-react`)[iconName] || null;

  return (
    <>
      {PhosphorIcon && <PhosphorIcon size={size} weight={weight} />}
    </>
  )
}