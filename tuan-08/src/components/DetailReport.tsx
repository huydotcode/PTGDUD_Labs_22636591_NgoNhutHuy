import { useEffect, useState } from "react";
import { HiDocumentReport } from "react-icons/hi";
import { axiosInstance } from "../lib/axios";
import SectionTitle from "./SectionTitle";
import Table from "./Table";

const DetailReport = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/order_data");
        const data = response.data;
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    })();
  }, []);

  return (
    <div className="mt-4">
      <SectionTitle icon={<HiDocumentReport />} title="Detailed report" />
      <Table data={orders} setData={setOrders} />
    </div>
  );
};

export default DetailReport;
