import React from 'react';

const InputTypes = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default InputTypes