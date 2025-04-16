import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  value: number;
  percentage: number;
}

const OverviewItem = ({ icon, percentage, title, value }: Props) => {
  return <div>OverviewItem</div>;
};

export default OverviewItem;
