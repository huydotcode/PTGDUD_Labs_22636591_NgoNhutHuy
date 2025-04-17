import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { GoPencil } from "react-icons/go";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Button,
} from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { axiosInstance } from "../lib/axios";

interface Props {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

const { Option } = Select;

const Table = ({ data, setData }: Props) => {
  const [editingRow, setEditingRow] = useState<Data | null>(null);
  const [formData, setFormData] = useState<Partial<Data>>({});

  const handleEditClick = (row: Data) => {
    setEditingRow(row);
    setFormData({
      name: row.name,
      company: row.company,
      order_value: row.order_value,
      order_date: row.order_date,
      order_status: row.order_status,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (editingRow) {
      const updatedData = data.map((item) =>
        item.id === editingRow.id ? { ...item, ...formData } : item
      );
      setData(updatedData);
      setEditingRow(null);

      await axiosInstance.put(`/order_data/${editingRow.id}`, {
        ...editingRow,
        ...formData,
      });
    }
  };

  const handleCancel = () => {
    setEditingRow(null);
    setFormData({});
  };

  const columns: TableColumn<Data>[] = [
    {
      name: "CUSTOMER NAME",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.avatar}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => row.order_value,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.order_date,
      format: (row) => new Date(row.order_date).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "STATUS",
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded-full ${
            row.order_status === "Completed"
              ? "bg-green-200 text-green-800"
              : row.order_status === "Pending"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-red-200 text-red-800"
          }`}
        >
          {row.order_status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "ACTIONS",
      cell: (row) => (
        <button
          className="hover:underline flex items-center gap-1"
          onClick={() => handleEditClick(row)}
        >
          <GoPencil />
        </button>
      ),
      ignoreRowClick: true,
    },
  ];

  return (
    <div className="mt-2">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 20]}
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="350px"
        selectableRows
        responsive
        customStyles={{
          headCells: {
            style: {
              backgroundColor: "#f3f4f6",
              color: "#111827",
              fontWeight: "bold",
              fontSize: "14px",
              paddingLeft: "12px",
              paddingRight: "12px",
              textTransform: "uppercase",
            },
          },
          headRow: {
            style: {
              borderBottom: "2px solid #e5e7eb",
            },
          },
        }}
      />

      <Modal
        title="Edit Order"
        open={!!editingRow}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSave} initialValues={formData}>
          <Form.Item label="Customer Name">
            <Input name="name" value={formData?.name} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Company">
            <Input
              name="company"
              value={formData?.company}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Order Value">
            <InputNumber
              name="order_value"
              value={formData?.order_value}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  order_value: value ?? undefined,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Order Date">
            <DatePicker
              format="YYYY-MM-DD"
              value={dayjs(formData?.order_date)}
              onChange={(date) =>
                setFormData((prev) => ({
                  ...prev,
                  order_date: date?.format("YYYY-MM-DD"),
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Status">
            <Select
              value={formData?.order_status}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, order_status: value }))
              }
            >
              <Option value="Completed">Completed</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Cancelled">Cancelled</Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Table;
