import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/url";
import { idUser } from "../ulti/isLogin";
import LoadingComponent from "../ulti/loading";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-center">
        {project.tenDuAn}
      </h2>
      <div className="mb-2">
        <b className="text-sky-400">
          Trạng Thái:
          {project.duocDuyet != "ok" ? (
            project.duocDuyet == "no" ? (
              <span className="text-red-500">Đã bị từ chối</span>
            ) : (
              "Đang chờ Duyệt"
            )
          ) : (
            <>
              <span className="text-green-500">Đã được duyệt</span>
              <button className="bg-red-400 float-right px-4 text-white">Quản lý</button>
            </>
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
      <b>Thành viên:</b>
    </div>
  );
};

const UserQuanLy = () => {
  const [duan, setDuan] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const duan = await getData(sheetName.Projects);
      const duancuatoi = duan.filter((e) => e.idLeader == idUser);
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
