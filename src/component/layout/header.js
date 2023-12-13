import { useState, useEffect } from "react"; // Import useEffect for side-effects

const handleSignout = async () => {
  await localStorage.removeItem("isAdmin");
  await localStorage.removeItem("isLogin");
  window.location.reload();
};
const PrototypeHeader = (link, title) => {
  return (
    <>
      {link.map((a, i) => (
        <li key={i} className="px-4 font-semibold text-white">
          <a href={a}>{title[i]}</a>
        </li>
      ))}
      {/* {isLogin && (
        <li key={"signout"} className="px-4 font-semibold text-white" onClick={handleSignout}>
          <Link href={'/'}>Sign Out</Link>
        </li>
      )} */}
    </>
  );
};

const basiclink = ["/", "/detai", "/login"];
const basictitle = ["Giới Thiệu", "Đề Tài", "Login"];

const Adminlink = ["/", "/detai", "/admin/quanly"];
const Admintitle = ["Trang chủ", "Đề tài", "Quản Lý"];

const Userlink = ["/", "/detai", "/user/dangky", "/user/quanly"];
const Usertitle = ["Trang chủ", "Đề tài", "Đăng Ký Đề tài", "Quản lý đề tài"];

const Header = () => {
  // useEffect(() => {
    // Use useEffect to handle side-effects
    //   if (isLogin) {
    //     if (isAdmin) {
    //       setLink([Adminlink, Admintitle]);
    //     } else {
    //       setLink([Userlink, Usertitle]);
    //     }
    //   } else {
    //     setLink([basiclink, basictitle]);
    //   }
    // }, [isLogin, isAdmin]); // useEffect dependencies

    return (
      <>
        <nav className="bg-blue-500 p-4 text-gray-800">
          <div className="container mx-auto flex items-center justify-between">
            <img  src={'../_IMG/logo.jpg'} alt="logo" width={40} />
            <ul className="flex">{PrototypeHeader(basiclink, basictitle)}</ul>
          </div>
        </nav>
      </>
    );
};

export default Header;
