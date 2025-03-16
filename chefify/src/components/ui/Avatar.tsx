import React from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<Props> = ({
  src,
  alt,

  width = 8,
  height = 8,
}) => {
  return (
    <img
      className={`rounded-full w-${width} h-${height}`}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
