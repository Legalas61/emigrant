import axios from "axios";
import { useState, useEffect } from "react";
import { JOB_URL, SERVER_URL } from "../../global";
import SelectCard from "../CardSelectCountry";

const BestCountry = () => {
  const apiUrl = `${SERVER_URL}/api/${JOB_URL}/get-jobs/tp`;
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((resp) => setListCountry(resp.data.topCountry))
      .catch((err) => setListCountry([]));
  }, []);

  return (
    <div className="list">
      {listCountry.map((county) => (
        <SelectCard
          key={county.name}
          nameCountry={county.name}
          url={`job/${county.id}`}
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

export default BestCountry;
