import axios from "axios";
import { useState, useEffect } from "react";

import { JOB_URL, SERVER_URL } from "../global";
import SelectCard from "./CardSelectCountry";

const ListCountry = ({ label }) => {
  const [listCountry, setListCountry] = useState([]);
  const apiUrl = `${SERVER_URL}/api/${JOB_URL}/get-jobs/name-count/${label}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((resp) => setListCountry(resp.data.message))
      .catch(() => setListCountry([]));
  }, []);

  if (!listCountry || listCountry.length === 0)
    return <p>В процессе наполнения</p>; //TODO:Сделать карточку при клике на которую открывается форма с выбранным континентом
  return (
    <div className="list">
      {listCountry.length >= 6
        ? listCountry
            .slice(0, 5)
            .map((county, i) => (
              <SelectCard
                key={i}
                nameCountry={county.location}
                url={`job/${county.id}`}
                card={county}
              />
            ))
            .concat(
              <SelectCard
                key={"next"}
                nameCountry={"Далее"}
                url={`job/${label}`}
              />
            )
        : listCountry.map((county, i) => (
            <SelectCard
              key={i}
              nameCountry={county.location}
              url={`job/${label}`}
              card={county}
            />
          ))}
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
