import React, { useEffect, useState } from "react";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/url";

const DeTai = () => {
  const [projects, setProjects] = useState([]);
  const [quanLyDuAn, setQuanLyDuAn] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getData(sheetName.Projects);
      const quanLyDuAnData = await getData(sheetName.QuanLyDuAn);

      setProjects(projectsData);
      setQuanLyDuAn(quanLyDuAnData);
    };

    fetchData();
  }, []);

  const idduocDuyet = quanLyDuAn.filter((arg) => arg.duocDuyet).map(
    (arg) => arg.idDuAn
  );

  const finalData = projects.filter((arg) => idduocDuyet.includes(arg.id));

  return (
    <>
      <ul>
        {finalData.map((e) => (
          <li key={e.id}>
            {e.tenDuAn}
            {e.khoa}
            {e.capQuanLy}
            {e.loaiHinhNghienCuu}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DeTai;
