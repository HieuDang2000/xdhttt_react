import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/url";
import LoadingComponent from "../ulti/loading";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-center">
        {project.tenDuAn}
      </h2>
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

const DeTai = () => {
  const [projects, setProjects] = useState([]);
  const [quanLyDuAn, setQuanLyDuAn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getData(sheetName.Projects);
      const quanLyDuAnData = await getData(sheetName.QuanLyDuAn);

      setProjects(projectsData);
      setQuanLyDuAn(quanLyDuAnData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const idduocDuyet = quanLyDuAn
    .filter((arg) => arg.duocDuyet)
    .map((arg) => arg.idDuAn);

  const finalData = projects.filter((arg) => idduocDuyet.includes(arg.idDuAn));

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {finalData.map((project) => (
              <ProjectCard key={project.idDuAn} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DeTai;
