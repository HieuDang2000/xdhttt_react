import { useState, useEffect } from "react"; // Import useEffect for side-effects
import { isAdmin, isLogin } from "../../ulti/isLogin";
import logoImage from "../_IMG/logo.jpg";
const handleSignout = async () => {
  await localStorage.removeItem("isAdmin");
  await localStorage.removeItem("isLogin");
  window.location.reload();
  alert("Đăng xuất thành công");
};
const PrototypeHeader = (link, title) => {
  return (
    <>
      {link.map((a, i) => (
        <li key={i} className="px-4 font-semibold text-white">
          <a href={a}>{title[i]}</a>
        </li>
      ))}
      {isLogin && (
        <li
          key={"signout"}
          className="px-4 font-semibold text-white"
          onClick={handleSignout}
        >
          <a href={"/"}>Sign Out</a>
        </li>
      )}
    </>
  );
};

const basiclink = ["/", "/detai", "/login"];
const basictitle = ["Giới Thiệu", "Đề Tài", "Login"];

const Adminlink = ["/", "/detai", "/admin/quanly"];
const Admintitle = ["Trang chủ", "Đề tài", "Quản Lý Xét Duyệt"];

const Userlink = ["/", "/detai", "/user/dangky", "/user/quanly"];
const Usertitle = ["Trang chủ", "Đề tài", "Đăng Ký Đề tài", "Quản lý đề tài"];

const Header = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4 text-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <img src={logoImage} alt="logo" width={40} />
          <ul className="flex">
            {isAdmin
              ? PrototypeHeader(Adminlink, Admintitle)
              : isLogin
              ? PrototypeHeader(Userlink, Usertitle)
              : PrototypeHeader(basiclink, basictitle)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
