import React, { useState } from "react";
import Dropdown from "../ulti/dropdown";
import { addData } from "../ulti/addData";
import { sheetName } from "../ulti/url";
import { idUser } from "../ulti/isLogin";
import { useNavigate } from "react-router-dom";
const UserDangky = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    tenDuAn: "",
    khoa: "",
    capQuanLy: "",
    loaiHinhNghienCuu: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const departments = [
    "Khoa Lý luận chính trị, Luật và Quản lý nhà nước.",
    "Khoa Khoa học tự nhiên.",
    "Khoa Khoa học xã hội và nhân văn.",
    "Khoa Ngoại ngữ",
    "Khoa Giáo dục tiểu học và mầm non.",
    "Khoa Công nghệ thông tin.",
    "Khoa Giáo dục Thể chất, Quốc phòng.",
    "Khoa Sư phạm.",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
    const { tenDuAn, khoa, capQuanLy, loaiHinhNghienCuu } = formData;
    const idLeader = idUser
    await addData({
      name: sheetName.Projects,
      values: [tenDuAn, khoa, capQuanLy, loaiHinhNghienCuu, idLeader],
    });
    alert("Đăng ký mới thành công")
    navigate('/user/quanly')
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenDuAn"
          >
            Tên Dự Án
          </label>
          <input
            type="text"
            id="tenDuAn"
            name="tenDuAn"
            value={formData.tenDuAn}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <Dropdown
            title={"Khoa"}
            name={"khoa"}
            values={departments}
            setmethod={handleChange}
          />
          {formData.khoa}
        </div>
        <div className="mb-4">
          <Dropdown
            title={"Cấp Quản Lý"}
            name={"capQuanLy"}
            values={["Trường", "Bộ", "Nhà Nước"]}
            setmethod={handleChange}
          />
          {formData.capQuanLy}
        </div>
        <div className="mb-4">
          <Dropdown
            title={"Loại hình nghiên cứu"}
            name={"loaiHinhNghienCuu"}
            values={["Cơ bản", "Ứng dụng"]}
            setmethod={handleChange}
          />
          {formData.loaiHinhNghienCuu}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDangky;
