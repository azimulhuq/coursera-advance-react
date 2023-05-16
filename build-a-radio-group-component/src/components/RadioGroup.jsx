import { Children, cloneElement } from "react";

// eslint-disable-next-line react/prop-types
const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = Children.map(children, (child) => {
    return cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className="flex flex-col items-start">{RadioOptions}</div>;
};

export default RadioGroup;
