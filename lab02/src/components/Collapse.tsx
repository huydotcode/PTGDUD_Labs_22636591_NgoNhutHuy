import React, { useState } from "react";

interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<Props> = ({ className, title, children }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={`p-4 ${className}`}>
      <div className={`flex items-center justify-between`}>
        <h5 className="font-bold text-xl">{title}</h5>

        <button onClick={() => setOpen((prev) => !prev)}>X</button>
      </div>

      {open && <div>{children}</div>}
    </div>
  );
};

export default Collapse;
