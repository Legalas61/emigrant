import { useState } from "react";
import axios from "axios";
import { CONTINENTS, BLUE, SERVER_URL, L_GREY } from "../../global";
import BtnSelectMap from "../BtnSelectMap";

const SelectLocation = ({ status, action, isError, setError }) => {
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
      .catch();
  };

  // Получаю значение из инпута и делаю перебор из списка.
  const sortCountry = (inp) => {
    if (typeof inp === "string" && inp.trim().length !== 0) {
      const name = inp[0].toUpperCase() + inp.slice(1);
      const listCounty = [];
      countryTab.map((e) => {
        if (e.search(name) !== -1) {
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
        <div className="wrap">
          {countryTab.map((e) => (
            <div
              className="tab"
              onClick={() => {
                action(e);
                setError(false);
              }}
            >
              {e}
            </div>
          ))}
        </div>
        <style jsx>{`
          .tabs {
            max-height: 100px;
            overflow: auto;
          }
          .wrap {
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
          <li>
            <BtnSelectMap
              title={continent.name}
              status={location}
              action={setLocation}
              setError={setError}
              printListCountry={getListCountry}
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
