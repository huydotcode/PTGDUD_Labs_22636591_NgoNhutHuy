import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const SectionTitle = ({ icon, title }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-secondary text-xl">{icon}</span>

      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
