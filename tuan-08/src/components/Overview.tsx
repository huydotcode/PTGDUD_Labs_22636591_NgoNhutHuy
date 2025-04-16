import { MdDashboard, MdOutlineAttachMoney } from "react-icons/md";
import SectionTitle from "./SectionTitle";

import { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { useAppContext } from "../hooks/useAppContext";
import { axiosInstance } from "../lib/axios";

const overviews = [
  {
    name: "Turnover",
    background: "#fff0f5",
    icon: <CiShoppingCart />,
  },
  {
    name: "Profit",
    background: "#EFF6FF",
    icon: <MdOutlineAttachMoney />,
  },
  {
    name: "New customer",
    background: "#f0f7fd",
    icon: <FaRegUserCircle />,
  },
];

const Overview = () => {
  const { overviewData, setOverviewData } = useAppContext();

  useEffect(() => {
    (async () => {
      try {
        if (overviewData.length != 0) {
          return;
        }

        const res = await axiosInstance.get("/overview_data");
        const data = res.data;

        setOverviewData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [overviewData.length, setOverviewData]);

  return (
    <div className="p-6">
      <SectionTitle icon={<MdDashboard />} title="Overview" />

      <div className="grid grid-cols-3 gap-4">
        {overviewData.map((item) => {
          const bg =
            overviews.find((overview) => overview.name === item.name)
              ?.background || "#fff";

          return (
            <div
              key={item.name}
              className={`relative shadow-md rounded-lg p-4 w-full`}
              style={{
                background: bg,
              }}
            >
              <div
                className={`absolute top-2 right-2 p-4 w-12 h-12 rounded-xl flex items-center justify-center`}
              >
                <span className="text-4xl">
                  {
                    overviews.find((overview) => overview.name === item.name)
                      ?.icon
                  }
                </span>
              </div>

              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-4xl font-bold mt-3">{`${item.unit}${item.value} `}</p>
              <p className="text-sm mt-4">
                <span className="text-green-500 font-bold">{`${item.percentage}% `}</span>
                period of change
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
