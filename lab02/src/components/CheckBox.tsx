import React from "react";

interface Props {
  value: string;
  title: string;
}

const CheckBox: React.FC<Props> = ({ value, title }) => {
  return (
    <div className="p-2">
      <input type="checkbox" id={value} />
      <label className="ml-1" htmlFor={value}>
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
