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
        <li
          key={i}
          className="px-4 py-2 font-semibold text-white border-b-2 border-gray-200 md:border-none"
        >
          <a href={a}>{title[i]}</a>
        </li>
      ))}
      {isLogin && (
        <li
          key={"signout"}
          className="px-4 py-2 font-semibold text-white"
          onClick={handleSignout}
        >
          <a href={"/"}>Sign Out</a>
        </li>
      )}
    </>
  );
};

const basiclink = ["/", "/detai", "/login"];
const basictitle = ["Giới Thiệu", "Top Đề Tài", "Login"];

const Adminlink = ["/", "/detai", "/admin/quanly"];
const Admintitle = ["Trang chủ", "Top Đề tài", "Quản Lý Xét Duyệt"];

const Userlink = [
  "/",
  "/detai",
  "/user/dangky",
  "/user/quanly",
  "/user/hopthu",
  "/user/thongtin"
];
const Usertitle = [
  "Trang chủ",
  "Top Đề tài",
  "Đăng Ký Đề tài",
  "Quản lý đề tài",
  "Hộp thư",
  "Thông tin tài khoản",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="bg-blue-500 p-4 text-gray-800 relative">
      <div className="container mx-auto flex items-center justify-between relative">
        <img src={logoImage} alt="logo" width={40} />

        {/* Hamburger menu button for smaller screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation links with dropdown effect */}

        <ul
          className={`flex flex-col md:flex-row md:flex ${
            isMenuOpen
              ? "absolute right-0 top-full bg-blue-500 z-10"
              : "hidden md:flex"
          } `}
          onClick={closeMenu}
        >
          {isAdmin
            ? PrototypeHeader(Adminlink, Admintitle)
            : isLogin
            ? PrototypeHeader(Userlink, Usertitle)
            : PrototypeHeader(basiclink, basictitle)}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
