import { useEffect, useState } from "react";
import { HiDocumentReport } from "react-icons/hi";
import { axiosInstance } from "../lib/axios";
import SectionTitle from "./SectionTitle";
import Table from "./Table";
import AddUser from "./AddUser";

const DetailReport = () => {
  const [orders, setOrders] = useState<Data[]>([]);

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
      <div className="flex items-center justify-between">
        <SectionTitle icon={<HiDocumentReport />} title="Detailed report" />
        <AddUser setData={setOrders} />
      </div>
      <Table data={orders} setData={setOrders} />
    </div>
  );
};

export default DetailReport;
