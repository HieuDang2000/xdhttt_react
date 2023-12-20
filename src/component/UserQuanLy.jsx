import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { ProjAction, sheetName } from "../ulti/nameVariable";
import { idUser, isAdmin } from "../ulti/isLogin";
import LoadingComponent from "../ulti/loading";
import { useNavigate } from "react-router-dom";
import { addData } from "../ulti/addData";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [diem, setdiem] = useState(0);
  const handleEdit = () => {
    console.log("first");
    navigate("/user/dangky", {
      state: {
        project,
      },
    });
  };
  const handleQuanly = () => {
    console.log("first");
    navigate("/user/themtask", {
      state: {
        project,
      },
    });
  };
  const chamdiem = () => {
    if (diem > 100 || diem < 1) {
      alert("Nhập điểm trong khoảng từ 1-100");
      return;
    }
    addData({ name: ProjAction.SubmitP, values: [diem, diem], id: project.id });
  };
  const handlediemchange = (e) => {
    console.log(diem);
    setdiem(e.target.value);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-center">
        {project.tenDuAn}
      </h2>
      <div className="mb-2">
        <b className="text-sky-400">
          {isAdmin ? "Trạng Thái: Hoàn Thành" : "Trạng Thái:"}
          {project.duocDuyet != "ok" ? (
            project.duocDuyet == "no" ? (
              <span className="text-red-500">Đã bị từ chối</span>
            ) : (
              <>
                "Đang chờ Duyệt"
                <button
                  onClick={() => handleEdit()}
                  className="bg-red-400 float-right px-4 text-white"
                >
                  Sửa thông tin
                </button>
              </>
            )
          ) : (
            !isAdmin && (
              <>
                <span className="text-green-500">Đã được duyệt</span>
                <button
                  onClick={() => handleQuanly()}
                  className="bg-green-500 float-right px-4 text-white"
                >
                  Quản lý Dự Án
                </button>
              </>
            )
          )}
        </b>
      </div>
      <p className="text-gray-600 mb-2">
        <b>Khoa: </b>
        {project.khoa} - <b>Cấp Quản Lý: </b>
        {project.capQuanLy}
      </p>
      <p className="text-gray-600 mb-2">
        <b>Loại Hình Nghiên Cứu: </b> {project.loaiHinhNghienCuu}
      </p>
      <b>Thành viên:</b> {project.thanhVien}
      {isAdmin && (
        <div>
          <input
            type="number"
            onChange={handlediemchange}
            className="bg-slate-200"
            min="1"
            max="100"
          />
          <button
            className="rounded mr-2 bg-green-500"
            onClick={() => chamdiem(project.id, diem)}
          >
            Chấm điểm
          </button>
        </div>
      )}
    </div>
  );
};

const UserQuanLy = () => {
  const [duan, setDuan] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const duan = await getData(sheetName.Projects);
      const duancuatoi = duan
        .filter((e) => e.idLeader == idUser)
        .filter((e) => {
          return e.chamDiem === "";
        });
      await setDuan(duancuatoi);
      console.log(duancuatoi);
      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {duan.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserQuanLy;
