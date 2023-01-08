export interface cssValidationProps {
  name: string | any;
  validation: boolean;
}
[];

export default function exec(props: cssValidationProps[]) {
  const cssClasses = props.filter((item) => item.validation === true);
  const list = cssClasses.map((item) => item.name);
  return list.join(" ");
}
