import React, { useState, useEffect } from "react";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/nameVariable";
import LoadingComponent from "../ulti/loading";
import { ProjectCard } from "./UserQuanLy";

const AdminCham = () => {
  const [duan, setDuan] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const duan = await getData(sheetName.Projects);
      const duancuatoi = duan.filter((e) => e.chamDiem === 0);
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

export default AdminCham;
