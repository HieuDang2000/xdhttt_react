import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/nameVariable";
import LoadingComponent from "../ulti/loading";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white md:w-1/2 p-4 rounded-lg shadow-md  ">
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getData(sheetName.Projects);
      setProjects(projectsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const finalData = projects.filter((arg) => arg.duocDuyet === "ok");

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
          <div className="grid grid-cols-1 gap-4 place-items-center">
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
