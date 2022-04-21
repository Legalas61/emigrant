import React from "react";
import {
  AFRICA_MAP,
  ASIA_MAP,
  AUSTRALIA_MAP,
  BLUE,
  EUROPA_MAP,
  L_AMERICA_MAP,
  N_AMERICA_MAP,
} from "../global";

const BtnSelectMap = ({
  title,
  status,
  action,
  setError,
  printListCountry,
  setStatusContinent,
}) => {
  let map = undefined;
  let codeContinent = undefined;

  switch (title) {
    case "Азия":
      map = ASIA_MAP;
      codeContinent = "AS";
      break;
    case "Австралия и Океания":
      map = AUSTRALIA_MAP;
      codeContinent = "AU";
      break;
    case "Европа":
      codeContinent = "EU";
      map = EUROPA_MAP;
      break;
    case "Африка":
      codeContinent = "AF";
      map = AFRICA_MAP;
      break;
    case "Северная Америка и Карибский бассейн":
      map = N_AMERICA_MAP;
      codeContinent = "NA";
      break;
    case "Латинская Америка":
      map = L_AMERICA_MAP;
      codeContinent = "LA";
      break;
  }

  const selected = () => {
    action(title);
    setError(false);
    printListCountry(codeContinent);
    setStatusContinent(codeContinent);
  };

  return (
    <figure onClick={() => selected()}>
      <img src={`${map}`} alt={`Выбрать для размещения в ${title}`} />
      <figcaption>{title}</figcaption>

      <style jsx>{`
        figure {
          border-radius: 10px;
          border: 3px solid #f7f7f7;
          color: ${title === status ? "#fff" : BLUE};
          cursor: pointer;
          padding: 10px 5px;
          margin: 0 10px 10px 0;
          text-align: center;
          width: auto;
          font-size: 10px;
          background-color: ${title === status ? BLUE : "#fff"};
        }
        figure img {
          height: 50px;
        }
        figure:hover {
          color: #fff;
          background: ${BLUE};
        }
      `}</style>
    </figure>
  );
};

export default React.memo(BtnSelectMap);
