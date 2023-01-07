export interface cssValidationProps {
  name: string;
  validation: any;
}

export default function cssValidation(props: cssValidationProps[]) {
  const cssClasses = props.filter((item) => item.validation === true);
  const list = cssClasses.map((item) => item.name);
  return list.join(" ");
}
