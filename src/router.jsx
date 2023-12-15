import { Route, Routes } from "react-router-dom";
import { GioiThieu, DeTai, Login, Signup, UserDangky, UserQuanLy, AdminQuanly } from "./component";
import { App } from "./App";
import { Header, Footer } from "./component/layout";
export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes element={<App />}>
        <Route path="/" element={<GioiThieu />} />
        <Route path="/detai" element={<DeTai />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/dangky" element={<UserDangky />} />
        <Route path="/user/quanly" element={<UserQuanLy />} />
        <Route path="/admin/quanly" element={<AdminQuanly />} />
      </Routes>
      <Footer />
    </>
  );
}
