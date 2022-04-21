import { useState } from "react";
import axios from "axios";
import { CONTINENTS, BLUE, SERVER_URL, L_GREY } from "../../global";
import BtnSelectMap from "../BtnSelectMap";

const SelectLocation = ({
  status,
  action,
  isError,
  setError,
  setStatusContinent,
}) => {
  const [location, setLocation] = useState();
  const [countryTab, setCountryTab] = useState();
  const [listCountyFromServer, setListCountyFromServer] = useState();

  // Получаю список стран по указанному коду из кнопки
  const getListCountry = (code) => {
    axios
      .get(`${SERVER_URL}/api/continents/${code}`)
      .then((res) => {
        setCountryTab(res.data);
        setListCountyFromServer(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError("Не ответа с сервера ");
      });
  };

  // Получаю значение из инпута и делаю перебор из списка.
  const sortCountry = (inp) => {
    if (typeof inp === "string" && inp.trim().length !== 0) {
      const name = inp[0].toUpperCase() + inp.slice(1);
      const listCounty = [];
      countryTab.map((e) => {
        if (e.toUpperCase().search(name.toUpperCase()) !== -1) {
          listCounty.push(e);
        }
      });
      return setCountryTab(listCounty);
    } else {
      return setCountryTab(listCountyFromServer);
    }
  };

  /* После проверки значения из инпута открываю блок с кнопками
   для быстрого добавления страны в инпут */
  const TabsCountry = ({ countryTab }) => {
    return (
      <div className="tabs">
        <ul className="wrap">
          {countryTab.map((e) => (
            <li
              className="tab"
              key={e}
              onClick={() => {
                action(e);
                setError(false);
              }}
            >
              {e}
            </li>
          ))}
        </ul>

        <style jsx>{`
          .tabs {
            max-height: 100px;
            overflow: auto;
          }
          .wrap {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            height: max-content;
          }
          .tabs .tab {
            background-color: ${L_GREY};
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 10px;
            padding: 10px;
            font-size: 12px;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className={isError ? "location error" : "location"}>
      <span className="title">Локация для размещения объявления:</span>
      <ul className="select-location">
        {CONTINENTS.map((continent) => (
          <li key={continent.code}>
            <BtnSelectMap
              title={continent.name}
              status={location}
              action={setLocation}
              setError={setError}
              printListCountry={getListCountry}
              setStatusContinent={setStatusContinent}
            />
          </li>
        ))}
      </ul>

      {location
        ? CONTINENTS.map((continent) => {
            if (continent.name === location) {
              return (
                <>
                  <input
                    type={"text"}
                    placeholder={`Введите название страны из ${continent.in}`}
                    value={status}
                    onChange={(e) => {
                      sortCountry(e.target.value);
                      action(e.target.value);
                      setError(false);
                    }}
                  ></input>
                  {Array.isArray(countryTab) && countryTab.length !== 0 ? (
                    <TabsCountry countryTab={countryTab} />
                  ) : (
                    ""
                  )}
                </>
              );
            }
          })
        : null}

      <style jsx>{`
        .title {
          font-size: 14px;
          opacity: 0.6;
        }
        .location {
          border: 3px solid ${L_GREY};
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 10px;
        }
        .select-location {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          margin-bottom: 0;
        }
        input {
          border-radius: 10px;
          margin-bottom: 5px;
          padding: 5px;
          border: 3px solid ${L_GREY};
          color: ${BLUE};
          min-height: 30px;
          min-width: 320px;
          width: 100%;
        }
        .error {
          border-color: red;
        }
      `}</style>
    </div>
  );
};

export default SelectLocation;
