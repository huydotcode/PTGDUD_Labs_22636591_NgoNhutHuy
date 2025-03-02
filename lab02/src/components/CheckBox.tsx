import React from "react";

interface Props {
  value: string;
  title: string;
}

const CheckBox: React.FC<Props> = ({ value, title }) => {
  return (
    <div className="p-2">
      <label className="custom-checkbox flex items-center">
        <input type="checkbox" id={value} value={value} />
        <span className="checkmark"></span>
        <span className="ml-2">{title}</span>
      </label>
    </div>
  );
};

export default CheckBox;
