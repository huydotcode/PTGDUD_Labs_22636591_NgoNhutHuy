import DetailReport from "../components/DetailReport";
import Overview from "../components/Overview";

const DashboardPage = () => {
  return (
    <div className="h-full flex flex-col">
      <Overview />
      <DetailReport />
    </div>
  );
};

export default DashboardPage;
