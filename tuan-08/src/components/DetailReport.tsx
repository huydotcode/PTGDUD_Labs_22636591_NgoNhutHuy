import { HiDocumentReport } from "react-icons/hi";
import SectionTitle from "./SectionTitle";

const DetailReport = () => {
  return (
    <div className="p-6">
      <SectionTitle icon={<HiDocumentReport />} title="Detailed report" />

      <div className="grid grid-cols-3 gap-4">
        {/* {overviewData.map((item) => {
          const bg =
            overviews.find((overview) => overview.name === item.name)
              ?.background || "#fff";

          return (
            <div
              key={item.name}
              className={`relative bg-[${bg}] shadow-md rounded-lg p-4 w-full`}
            >
              <div
                className={`absolute top-2 right-2 p-4 w-12 h-12 rounded-xl border flex items-center justify-center`}
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
        })} */}
      </div>
    </div>
  );
};

export default DetailReport;
