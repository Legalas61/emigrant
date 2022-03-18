import { useState } from "react";
import axios from "axios";
import { CONTINENTS, BLUE, SERVER_URL, L_GREY } from "../global";
import BtnSelectMap from "./BtnSelectMap";

const SelectLocation = ({ status, action, isError, setError }) => {
  const [location, setLocation] = useState();
  const [nameSelectedCountry, setNameSelectedCountry] = useState();
  const [countryTab, setCountryTab] = useState();

  // Получаю и проверяю значение из инпута
  // Получение названий стран по символам с указанного континента
  const getListCountry = (inputValue) => {
    if (typeof inputValue === "string" && inputValue.trim().length > 1) {
      setNameSelectedCountry(inputValue);
      // Поиск кода континента
      const selectContinent = CONTINENTS.find((e) => e.name === location);

      axios
        .post(`${SERVER_URL}/api/continents/${selectContinent.code}`, {
          country: nameSelectedCountry,
        })
        .then((res) => {
          if (res.data) {
            setCountryTab(res.data);
          }
        })
        .catch(function (error) {
          console.log("error => ", error);
        });
    }
  };

  /* После проверки значения из инпута открываю блок с кнопками
   для быстрого добавления страны в инпут */
  const TabsCountry = ({ countryTab }) => {
    return (
      <div className="tabs">
        {countryTab.map((e) => (
          <div
            className="tab"
            onClick={() => {
              action(e.name);
              setError(false);
            }}
          >
            {e.name}
          </div>
        ))}
        <style jsx>{`
          .tabs {
            display: flex;
          }
          .tabs .tab {
            background-color: ${L_GREY};
            margin-right: 10px;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className={isError ? "location error" : "location"}>
      <span className="title">Выберите локацию:</span>
      <ul className="select-location">
        {CONTINENTS.map((continent) => (
          <li>
            <BtnSelectMap
              title={continent.name}
              status={location}
              action={setLocation}
              setError={setError}
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
                    placeholder={`Выберите страну в ${continent.in}`}
                    value={status}
                    onChange={(e) => {
                      getListCountry(e.target.value);
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
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
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
