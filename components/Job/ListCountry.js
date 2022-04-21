import axios from "axios";
import { useState, useEffect } from "react";

import { JOB_URL, SERVER_URL } from "../global";
import SelectCard from "./CardSelectCountry";

const ListCountry = ({ label }) => {
  const [listCountry, setListCountry] = useState(null);
  const apiUrl = `${SERVER_URL}/api/${JOB_URL}/get-jobs/${label}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(async (resp) => {
        label === "tp"
          ? setListCountry(resp.data.topCountry)
          : setListCountry(resp.data.message);
      })
      .catch((err) => setListCountry(null));
  }, []);

  console.log(listCountry);

  if (!listCountry || listCountry.length === 0)
    return <p>В процессе наполнения</p>; //TODO:Сделать карточку при клике на которую открывается форма с выбранным континентом
  return (
    <div className="list">
      {listCountry.map((county) => (
        <SelectCard
          nameCountry={county.name}
          url={`job/${county.ISO}`}
          card={county}
        />
      ))}
      {label !== "tp" ? <SelectCard nameCountry={"Далее"} /> : null}
      <style jsx>{`
        .list {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
export default ListCountry;
