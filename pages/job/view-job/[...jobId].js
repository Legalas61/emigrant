// TODO: Скрыть данные( phone, email) с сервера в клиент
import Head from "next/head";
import DOMPurify from "isomorphic-dompurify";
import GlobalWrap from "../../../components/GlobalWrap";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  SERVER_URL,
  JOB_URL,
  PLANET_ICON_BLUE,
  JOB_ICON_BLUE,
  TIME_ICON,
  USER_ICON,
  PHONE_ICON,
  CASH_ICON,
  HOME_ICON_BLUE,
  BORDER,
  GREY,
  CALENDAR_ICON,
} from "../../../components/global";
import Hider from "../../../components/Job/ViewJob/hider";

const FullTextJob = () => {
  const sanitizer = DOMPurify.sanitize;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();
  const [dateCreate, setDateCreate] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [website, setWebsite] = useState("");
  const [sumPay, setSumPay] = useState(0);
  const [typePay, setTypePay] = useState("");
  const [noLang, setNoLang] = useState("");
  const [noExp, setNoExp] = useState("");
  const [cash, setCash] = useState("");
  const [home, setHome] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [partTime, setPartTime] = useState("");

  useEffect(() => {
    const idJob = window.location.pathname.split("/view-job/")[1];
    // get job by ID from server
    axios.get(`${SERVER_URL}/api/${JOB_URL}/${idJob}`).then(({ data }) => {
      data = data.message;
      setTitle(data.title);
      setDescription(data.description);
      setCategory(data.category);
      setLocation(
        data.address ? `${data.location}, ${data.address}` : data.location
      );
      setDateCreate(data.dateCreate);
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
      setFacebook(data.facebook);
      setWebsite(data.website);
      setSumPay(data.sumPay);
      setNoLang(data.noLang);
      setNoExp(data.noExp);
      setCash(data.cash);
      setHome(data.home);
      setFullTime(data.fullTime);
      setPartTime(data.partTime);
      switch (data.typePay) {
        case "h":
          setTypePay("час");
          break;
        case "d":
          setTypePay("день");
          break;
        case "w":
          setTypePay("неделя");
          break;
        case "m":
          setTypePay("месяц");
          break;
      }
    });
  }, []);
  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - SOME TEXT</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: sanitizer(description) }}></p>
        <section>
          <h3>Контактная информация</h3>
          <div className="wrap">
            {name ? <span className="user">{name}</span> : null}

            {phone ? (
              <span className="hider phone">
                <Hider title="Показать номер" data={phone} />
              </span>
            ) : null}
            {email ? (
              <span className="hider email">
                <Hider title="Показать email" data={email} />
              </span>
            ) : null}

            {facebook ? <span className="facebook">{facebook}</span> : null}
            {website ? (
              <a
                className="website"
                href={sanitizer(website)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Сайт
              </a>
            ) : null}
          </div>
        </section>
        <section>
          <h3>Преимущества</h3>
          <div className="wrap">
            {console.log(typePay)}
            {sumPay ? (
              <span className="sumPay">{sumPay + "/" + typePay}</span>
            ) : null}
            {partTime || fullTime ? (
              <span className="timeWork">
                {partTime ? "Part time" : null}
                {partTime && fullTime ? " | " : null}
                {fullTime ? "Full time" : null}
              </span>
            ) : null}
            {noLang ? <span className="lang">Без языка</span> : null}
            {noExp ? <span className="exp">Без опыта</span> : null}
            {cash ? <span className="cash">Оплата наличными</span> : null}
            {home ? <span className="home">С проживанием</span> : null}
          </div>
        </section>
        <section className="other">
          <address title="Адрес работы">{location}</address>
          <time
            title="Дата публикации"
            className="timePub"
            pubdate={dateCreate}
            dateTime="{dateCreate}"
          >
            {dateCreate}
          </time>
          <span title="Категория" className="category">
            {category}
          </span>
        </section>
      </article>
      <style jsx>{`
        article {
          max-width: 1200px;
          width: 80%;
          margin: 0 auto;
        }
        .wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .wrap span,
        .wrap a {
          width: 33%;
          margin-bottom: 10px;
        }

        .other {
          border-top: ${BORDER};
          margin-top: 20px;
          padding-top: 20px;
        }
        .other * {
          margin-bottom: 10px;
          color: ${GREY};
        }
        address {
          font-style: normal;
        }
        address,
        .category,
        .timePub,
        .user,
        .phone,
        .website,
        .cash,
        .home,
        .timeWork {
          font-style: normal;
          display: flex;
          align-items: center;
        }
        address:before,
        .category:before,
        .timePub:before,
        .user:before,
        .phone:before,
        .email:before,
        .facebook:before,
        .website:before,
        .sumPay:before,
        .lang:before,
        .exp:before,
        .cash:before,
        .home:before,
        .timeWork:before {
          content: "";
          width: 19px;
          margin-right: 10px;
          height: 19px;
          background-repeat: no-repeat;
          background-position: center;
        }
        address:before,
        .website:before {
          background-image: url(${PLANET_ICON_BLUE});
        }
        .category:before {
          background-image: url(${JOB_ICON_BLUE});
        }
        .timePub:before {
          background-image: url(${TIME_ICON});
        }
        .user:before {
          background-image: url(${USER_ICON});
        }
        .phone:before {
          background-image: url(${PHONE_ICON});
        }
        .cash:before {
          background-image: url(${CASH_ICON});
        }
        .home:before {
          background-image: url(${HOME_ICON_BLUE});
        }
        .timeWork:before {
          background-image: url(${CALENDAR_ICON});
        }
        .email:before,
        .facebook:before,
        .website:before,
        .sumPay:before,
        .lang:before,
        .exp:before {
          font-weight: bold;
          font-size: 19px;
          color: #47378c;
        }
        .email:before {
          content: "@";
        }
        .facebook:before {
          content: "f";
        }
        .sumPay:before {
          content: "$";
        }
        .lang:before {
          content: "Abc";
        }
        .exp:before {
          content: "Exp";
        }
      `}</style>
    </GlobalWrap>
  );
};

export default FullTextJob;
