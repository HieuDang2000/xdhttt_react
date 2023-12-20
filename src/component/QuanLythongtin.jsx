import React, { useState } from "react";
import { addData } from "../ulti/addData";
import { sheetName } from "../ulti/nameVariable";
import { idUser } from "../ulti/isLogin";

const QuanLythongtin = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    hovaten: "",
    trinhDo: "",
    sodienthoai: "",
    email: "",
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form Data:", formData);
    const { hovaten, trinhDo, sodienthoai, email } = formData;
    if (!(hovaten && trinhDo && sodienthoai && email)) {
      alert("Vui lòng điền đủ thông tin");
      return;
    }
    addData({
      name: sheetName.EditUser,
      values: [hovaten, trinhDo, sodienthoai, email],
      id: idUser,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Thông tin User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="hovaten"
            className="block text-sm font-medium text-gray-600"
          >
            Họ và Tên
          </label>
          <input
            type="text"
            id="hovaten"
            name="hovaten"
            value={formData.hovaten}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="trinhDo"
            className="block text-sm font-medium text-gray-600"
          >
            Trình Độ
          </label>
          <input
            type="text"
            id="trinhDo"
            name="trinhDo"
            value={formData.trinhDo}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sodienthoai"
            className="block text-sm font-medium text-gray-600"
          >
            Số Điện Thoại
          </label>
          <input
            type="text"
            id="sodienthoai"
            name="sodienthoai"
            value={formData.sodienthoai}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sửa thông tin
        </button>
      </form>
    </div>
  );
};

export default QuanLythongtin;
