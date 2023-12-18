import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { ProjAction, sheetName } from "../ulti/nameVariable";
import LoadingComponent from "../ulti/loading";
import { addData } from "../ulti/addData";
const ProjectCard = ({ project }) => {
  const [chuthich, setchuthich] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setchuthich(value);
  };

  const Accept = (action) => {
    if (!chuthich) {
      alert("xin hãy điền chú thích");
      return;
    }
    console.log([action, chuthich]);
    addData({
      name: ProjAction.AcceptP,
      values: [action, chuthich],
      id: project.id,
    });
    window.location.reload()
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-2">
        <b className="text-sky-800">Chú Thích: {project.duocDuyet == 'wait' && "Đang đợi duyệt"}</b>
        <div className="flex">
          <input
            type="text"
            id="chuthich"
            name="chuthich"
            value={chuthich}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => Accept("ok")}
            className="rounded  w-40 bg-green-500"
          >
            Duyệt
          </button>
          <button
            onClick={() => Accept("no")}
            className="rounded  w-40 bg-red-600"
          >
            Từ chối
          </button>
          <button
            onClick={() => Accept("wait")}
            className="rounded  w-40 bg-blue-600 text-white"
          >
            Đợi Sửa
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center">
        Tên Dự Án: {project.tenDuAn}
      </h2>
      <p className="text-gray-600 mb-2">
        <b>Khoa: </b>
        {project.khoa} - <b>Cấp Quản Lý: </b>
        {project.capQuanLy}
      </p>
      <p className="text-gray-600 mb-2">
        <b>Loại Hình Nghiên Cứu: </b> {project.loaiHinhNghienCuu}
      </p>
    </div>
  );
};

const AdminQuanly = () => {
  const [duan, setDuan] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const duan = await getData(sheetName.Projects);
      const duancuatoi = duan.filter((e) => e.duocDuyet != "ok" && e.duocDuyet != "no");
      await setDuan(duancuatoi);
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
          <div className="grid grid-cols-1 gap-4">
            {duan.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminQuanly;
