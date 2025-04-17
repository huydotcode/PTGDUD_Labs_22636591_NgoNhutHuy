import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { axiosInstance } from "../lib/axios";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

const { Option } = Select;

const avatarOptions = Array.from({ length: 10 }, (_, i) => ({
  label: `Avatar ${i + 1}`,
  value: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

const AddUser = ({ setData }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<Data>({
    avatar: "",
    company: "",
    id: 0,
    name: "",
    order_date: "",
    order_status: "",
    order_value: 0,
  });

  const handleCancel = () => {
    setShowModal(false);
    setFormData({
      avatar: "",
      company: "",
      id: 0,
      name: "",
      order_date: "",
      order_status: "",
      order_value: 0,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!formData.name || !formData.company) {
      return;
    }

    setData((prev) => [
      {
        ...formData,
        id: Math.floor(Math.random() * 1000),
        order_date: formData.order_date || dayjs().format("YYYY-MM-DD"),
      },
      ...prev,
    ]);

    await axiosInstance.post("/order_data", {
      ...formData,
      id: Math.floor(Math.random() * 1000),
      order_date: formData.order_date || dayjs().format("YYYY-MM-DD"),
    });

    setShowModal(false);
    setFormData({
      avatar: "",
      company: "",
      id: 0,
      name: "",
      order_date: "",
      order_status: "",
      order_value: 0,
    });
  };

  return (
    <>
      <button
        className="flex items-center justify-center border px-2 py-1 rounded-xl border-secondary text-secondary"
        onClick={() => setShowModal(true)}
      >
        <IoMdAdd className="text-3xl" />
        <span className="text-sm font-bold">Add</span>
      </button>

      <Modal
        title="Edit Order"
        open={showModal}
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
              onChange={(value) => {
                if (value) {
                  setFormData((prev) => ({
                    ...prev,
                    order_value: value,
                  }));
                }
              }}
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

          <Form.Item label="Avatar">
            <Select
              value={formData.avatar}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, avatar: value }))
              }
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <div className="grid grid-cols-5 gap-2 p-2">
                    {avatarOptions.map((option) => (
                      <img
                        key={option.value}
                        src={option.value}
                        alt={option.label}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            avatar: option.value,
                          }))
                        }
                        className={`w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition ${
                          formData.avatar === option.value
                            ? "ring-2 ring-blue-500"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            >
              {avatarOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddUser;
