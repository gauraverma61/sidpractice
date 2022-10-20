import React from "react";

interface IProps {
  title: string;
}

const CustomButton = (props: IProps) => {
  const { title } = props;
  return (
    <div className="buttonclass">
      <button>{title}</button>
    </div>
  );
};

export default CustomButton;
