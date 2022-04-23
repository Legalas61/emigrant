import axios from "axios";
import { useState } from "react";
import { BLUE, SERVER_URL, CATEGORY } from "../../global";
import SelectLocation from "./Form.SelectLocation";

const FormAddNewAds = ({ status, action }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [continent, setContinent] = useState();
  const [description, setDescription] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

  // Для класс ошибки в инпутах
  const [isTitleError, setIsTitleError] = useState(false);
  const [isCategoryError, setIsCategoryError] = useState(false);
  const [isLocationError, setIsLocationError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
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
        continent,
        description,
      })
      .then((e) => {
        if (e.status === 201) {
          setSuccessText("Ваше объявление скоро появиться на сайте");
          setTitle("");
          setCategory("");
          setLocation("");
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

  return (
    <div className="form">
      <header>
        <h3>Добавление новой работы</h3>
        <button className="close" onClick={() => action(!status)}>
          X
        </button>
      </header>
      <form action="#" method="post" onSubmit={submitForm}>
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

        {isTitleError ||
        isCategoryError ||
        isLocationError ||
        isDescriptionError ||
        errorText ? (
          <span className="errorText">{errorText}</span>
        ) : undefined}

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
        .form {
          box-shadow: 0px 0px 15px 5px rgba(154, 154, 165, 0.14);
          position: fixed;
          padding: 10px 20px 25px 20px;
          color: ${BLUE};
          border-radius: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
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
        }
        textarea {
          resize: vertical;
          width: 100%;
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
      `}</style>
    </div>
  );
};

export default FormAddNewAds;
