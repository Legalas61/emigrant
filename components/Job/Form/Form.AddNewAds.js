import axios from "axios";
import { useState } from "react";
import {
  BLUE,
  SERVER_URL,
  CATEGORY,
  SHADOW,
  OPEN_EYE,
  CLOSE_EYE,
} from "../../global";
import SelectLocation from "./Form.SelectLocation";

const FormAddNewAds = ({ status, action }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [continent, setContinent] = useState();
  const [description, setDescription] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [openMoreDate, setOpenMoreDate] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [website, setWebsite] = useState("");
  const [sumPay, setSumPay] = useState(1);
  const [typePay, setTypePay] = useState("");
  const [noLang, setNoLang] = useState(false);
  const [noExp, setNoExp] = useState(false);
  const [cash, setCash] = useState(false);
  const [home, setHome] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);

  // Для класс ошибки в инпутах
  const [isTitleError, setIsTitleError] = useState(false);
  const [isCategoryError, setIsCategoryError] = useState(false);
  const [isLocationError, setIsLocationError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setOpenMoreDate(false);
    if (title.trim().length === 0) {
      setErrorText("Введите название объявления");
      return setIsTitleError(true);
    } else {
      setErrorText(undefined);
    }
    if (category.trim().length === 0) {
      setErrorText("Введите категорию объявления");
      return setIsCategoryError(true);
    } else {
      setErrorText(undefined);
    }
    if (location.trim().length === 0) {
      setErrorText("Введите локацию объявления");
      return setIsLocationError(true);
    } else {
      setErrorText(undefined);
    }
    if (description.trim().length === 0) {
      setErrorText("Введите описание объявления");
      return setIsDescriptionError(true);
    } else {
      setErrorText(undefined);
    }
    axios
      .post(`${SERVER_URL}/api/job/create`, {
        title,
        category,
        location,
        address,
        continent,
        description,
      })
      .then((e) => {
        if (e.status === 201) {
          setSuccessText("Ваше объявление скоро появиться на сайте");
          setTitle("");
          setCategory("");
          setLocation("");
          setAddress("");
          setDescription("");
          setTimeout(() => {
            setSuccessText("");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorText("Ошибка на сервере");
      });
  };

  const addMoreInfo = (e) => {
    e.preventDefault();
    setOpenMoreDate(!openMoreDate);
  };

  return (
    <div className="form">
      <header>
        <h3>Добавление новой работы</h3>
        <button className="close" onClick={() => action(!status)}>
          X
        </button>
      </header>
      <form action="#" method="post" onSubmit={submitForm}>
        <div className="wrap">
          <input
            type="text"
            name="title"
            placeholder="Заголовок"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
              setIsTitleError(undefined);
              setErrorText(undefined);
            }}
            className={isTitleError ? "error" : undefined}
          />
          <select
            name="category"
            required
            value={category}
            onChange={(e) => {
              e.target.classList.remove("transparent");
              setCategory(e.target.value);
              setIsCategoryError(undefined);
              setErrorText(undefined);
            }}
            className={`
            ${category === "" ? "transparent" : undefined}
            ${isCategoryError ? "error" : undefined}`}
          >
            <option value="" hidden key={0}>
              Категория
            </option>
            {CATEGORY.map((e) => {
              return (
                <option value={e} key={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <SelectLocation
            status={location}
            action={setLocation}
            address={address}
            setAddress={setAddress}
            isError={isLocationError}
            setError={setIsLocationError}
            setStatusContinent={setContinent}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Описание объявления"
            value={description}
            required
            className={isDescriptionError ? "error" : undefined}
            onChange={(e) => {
              setDescription(e.target.value);
              setIsDescriptionError(undefined);
              setErrorText(undefined);
            }}
          ></textarea>
        </div>

        {openMoreDate ? (
          <div className="contact-date">
            <input
              type="text"
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              placeholder="Ваш email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Ваш facebook"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
            />
            <input
              type="text"
              placeholder="Ваш website"
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
            <span className="hr">Преимущества:</span>
            <div className="row">
              <span>Зарплата:</span>
              <input
                type="number"
                min="1"
                onChange={(e) => setSumPay(e.target.value)}
                value={sumPay}
              />
              <select
                name="money"
                onChange={(e) => setTypePay(e.target.value)}
                value={typePay}
              >
                <option value="h">За час</option>
                <option value="d">За день</option>
                <option value="w">За неделю</option>
                <option value="m">За месяц</option>
              </select>
            </div>
            <label>
              <span>Без знания языка</span>
              <input
                type="checkbox"
                name="noLang"
                onChange={(e) => setNoLang(!noLang)}
                checked={noLang ? true : false}
              />
            </label>
            <label>
              <span>Без опыта</span>{" "}
              <input
                type="checkbox"
                name="noLang"
                onChange={(e) => setNoExp(!noExp)}
                checked={noExp ? true : false}
              />
            </label>
            <label>
              Работа на кэш{" "}
              <input
                type="checkbox"
                name="isCash"
                onChange={(e) => setCash(!cash)}
                checked={cash ? true : false}
              />
            </label>
            <label>
              С проживанием{" "}
              <input
                type="checkbox"
                name="isHome"
                onChange={(e) => setHome(!home)}
                checked={home ? true : false}
              />
            </label>
            <span className="hr">Тип занятости:</span>
            <label>
              Full-time{" "}
              <input
                type="checkbox"
                name="isHome"
                onChange={(e) => setFullTime(!fullTime)}
                checked={fullTime ? true : false}
              />
            </label>
            <label>
              Part-time{" "}
              <input
                type="checkbox"
                name="isHome"
                onChange={(e) => setPartTime(!partTime)}
                checked={partTime ? true : false}
              />
            </label>
          </div>
        ) : null}

        {isTitleError ||
        isCategoryError ||
        isLocationError ||
        isDescriptionError ||
        errorText ? (
          <span className="errorText">{errorText}</span>
        ) : undefined}
        <div className="addMoreInfo" onClick={addMoreInfo}>
          <span className="eye"></span>
          Дополнительные данные
        </div>
        {successText ? (
          <span className="success">{successText}</span>
        ) : undefined}

        <button className="submit" onClick={submitForm}>
          Отправить
        </button>
      </form>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
        }
        form,
        .form {
          display: flex;
          flex-direction: column;
          max-width: 450px;
        }
        .form .wrap {
          overflow: auto;
          max-height: 568px;
          padding-right: 10px;
        }
        .form {
          box-shadow: ${SHADOW};
          position: fixed;
          padding: 10px 20px 25px 20px;
          color: ${BLUE};
          border-radius: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          max-height: 800px;
        }
        .close {
          border-radius: 50%;
          border: 3px solid #f7f7f7;
          color: ${BLUE};
          cursor: pointer;
          width: 30px;
          height: 30px;
          padding: 5px;
          align-self: center;
          background-color: #fff;
          margin-left: 10px;
          align-content: center;
          display: grid;
          font-size: 16px;
        }
        .close:hover {
          color: #fff;
          background-color: ${BLUE};
        }
        .addMoreInfo,
        .submit {
          border: none;
          color: #fff;
          background-color: ${BLUE};
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
          padding: 10px 0;
        }
        .addMoreInfo {
          background-color: #fff;
          color: ${BLUE};
          box-shadow: ${SHADOW};
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 335px;
        }
        .addMoreInfo {
          display: inline-flex;
          background: ${BLUE};
          font-size: 16px;
          color: #fff;
          width: 100%;
          padding: 5px;
          margin-right: 10px;
        }
        .addMoreInfo .eye {
          background-image: ${openMoreDate
            ? `url(${OPEN_EYE})`
            : `url(${CLOSE_EYE})`};
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }

        input,
        select,
        textarea {
          border-radius: 10px;
          margin-bottom: 5px;
          padding: 5px;
          border: 3px solid #f7f7f7;
          color: ${BLUE};
          min-height: 30px;
          min-width: 320px;
          max-height: 120px;
          width: 100%;
        }
        textarea {
          resize: vertical;
          margin-left: 3px;
          min-height: 185px;
          max-height: 320px;
          max-width: 410px;
        }
        .transparent {
          opacity: 0.6;
        }
        .error {
          border-color: red;
          color: red;
        }
        .errorText {
          color: red;
        }
        .success {
          color: #18c96f;
        }
        .success,
        .errorText {
          text-align: center;
          margin-top: 10px;
        }
        .contact-date {
          background-color: ${BLUE};
          box-shadow: ${SHADOW};
          position: absolute;
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 90%;
          border-radius: 10px;
          padding: 20px 10px;
          color: #fff;
        }
        .contact-date input {
          margin-bottom: 10px;
          border: none;
        }
        .row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .row span {
          margin-right: 10px;
        }
        .row select {
          min-width: 100px;
          margin-left: 10px;
        }
        .row input[type="number"] {
          width: 250px;
          min-width: 50px;
          height: 33px;
        }
        .hr {
          margin: 10px 0;
        }
        .contact-date label {
          display: inline-flex;
          justify-content: space-between;
          cursor: pointer;
          font-size: 14px;
        }
        .contact-date label input {
          min-width: 5px;
          min-height: 5px;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default FormAddNewAds;
