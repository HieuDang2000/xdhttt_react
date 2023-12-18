import { Route, Routes, Navigate } from "react-router-dom";
import {
  GioiThieu,
  DeTai,
  Login,
  Signup,
  UserDangky,
  UserQuanLy,
  AdminQuanly,
  QuanLythongtin,
  Hopthu,
} from "./component";
import { App } from "./App";
import { Header, Footer } from "./component/layout";
import { isAdmin } from "./ulti/isLogin";
export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GioiThieu />} />
        <Route path="/detai" element={<DeTai />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Check if the user is authenticated before rendering the routes */}
        {!isAdmin ? (
          <>
            <Route path="/user/dangky" element={<UserDangky />} />
            <Route path="/user/quanly" element={<UserQuanLy />} />
            <Route path="/user/thongtin" element={<QuanLythongtin />} />
            <Route path="/user/hopthu" element={<Hopthu />} />
            <Route path="/admin/*" element={<Navigate to="/" />} />
          </>
        ) : (
          // Navigate to the login page if the user is not authenticated
          <>
            <Route path="/user/*" element={<Navigate to="/" />} />
            <Route path="/admin/quanly" element={<AdminQuanly />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}
