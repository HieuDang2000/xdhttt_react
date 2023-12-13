import { Route, Routes } from "react-router-dom";
import { GioiThieu, DeTai, Login, Signup } from "./component";
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
        <Route path="/admin/quanly" element={<GioiThieu />} />
        <Route path="/user/dangky" element={<GioiThieu />} />
        <Route path="/user/quanly" element={<GioiThieu />} />
      </Routes>
      <Footer />
    </>
  );
}
