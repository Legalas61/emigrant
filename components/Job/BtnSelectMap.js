import React from "react";
import {
  AFRICA_MAP,
  ASIA_MAP,
  AUSTRALIA_MAP,
  BLUE,
  CARIBBEAN_MAP,
  EUROPA_MAP,
  L_AMERICA_MAP,
  N_AMERICA_MAP,
} from "../global";

const BtnSelectMap = ({ title, status, action, setError }) => {
  let map = undefined;

  switch (title) {
    case "Азия":
      map = ASIA_MAP;
      break;
    case "Австралия и Океания":
      map = AUSTRALIA_MAP;
      break;
    case "Карибский бассейн":
      map = CARIBBEAN_MAP;
      break;
    case "Европа":
      map = EUROPA_MAP;
      break;
    case "Африка":
      map = AFRICA_MAP;
      break;
    case "Северная Америка":
      map = N_AMERICA_MAP;
      break;
    case "Латинская Америка":
      map = L_AMERICA_MAP;
      break;
  }

  const selected = () => {
    action(title);
    setError(false);
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
