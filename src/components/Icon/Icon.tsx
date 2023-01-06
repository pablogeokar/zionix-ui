
import { IconsType } from './IconsType';

interface IconProps extends IconsType {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
}

export default function Icon({ icon, weight = 'thin', size = 28 }: IconProps) {

  const PhosphorIcon = require(`../../../../phosphor-react`)[icon] || null;

  return (
    <>
      {PhosphorIcon && <PhosphorIcon size={size} weight={weight} />}
    </>
  )
}