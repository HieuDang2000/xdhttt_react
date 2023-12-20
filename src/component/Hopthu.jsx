import React, { useEffect, useState } from "react";
import LoadingComponent from "../ulti/loading";
import { getData } from "../ulti/getData";
import { sheetName } from "../ulti/nameVariable";
import { idUser } from "../ulti/isLogin";

const Card = ({ mail }) => {
  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <span className="font-bold">Content:</span> {mail.noidung}
        </div>
      </div>
    </>
  );
};

const Hopthu = () => {
  const [l, setl] = useState(true);
  const [mail, setmail] = useState([]);

  useEffect(() => {
    (async () => {
      const mail = await getData(sheetName.Hopthu);
      const mailuser = mail.filter((e) => e.idUser == idUser);
      setmail(mailuser);
      setl(false);
    })();
  }, []);

  console.log(mail)

  return (
    <>
      {l ? (
        <LoadingComponent />
      ) : mail.length ? (
        <>
          {mail.map((e) => (
            <Card mail={e} />
          ))}
        </>
      ) : (
        <div className="text-center">Hộp thư trống</div>
      )}
    </>
  );
};

export default Hopthu;
