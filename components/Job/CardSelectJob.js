import Link from "next/link";

import { BLUE, LOCATION_ICON, MORE_ICON } from "../global";

export default function SelectJobCard({
  title,
  category,
  location,
  dateCreate,
  author,
  fullTime,
  partTime,
  url,
}) {
  let workTime = undefined;
  const boolWorkTime = `${fullTime} ${partTime}`;
  switch (boolWorkTime) {
    case "true true":
      workTime = "Full-time | Part-time";
      break;
    case "true false":
      workTime = "Full-time";
      break;
    case "false true":
      workTime = "Part-time";
      break;
    default:
      workTime = "";
      break;
  }
  let currentDate = Date.parse(new Date());
  let days = (currentDate - Date.parse(dateCreate)) / 86400000;
  const dayGo = Math.round(days);

  const declOfNum = (n, text_forms) => {
    const n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  };
  return (
    <Link href={url}>
      <div className="card">
        <div className="wrap">
          {/* TODO:add icon on category */}
          <span className="category">{category}</span>
          <h3>{title[0].toUpperCase() + title.slice(1, title.length)}</h3>
          <div className="row">
            <span className="location">{location}</span>
            <span>{workTime}</span>
          </div>
        </div>
        <div className="footer">
          <div className="column">
            <span className="dayAgo">
              {dayGo} {declOfNum(dayGo, ["час", "часа", "часов"])} назад
            </span>
            {author !== "null" ? (
              <span className="author">{author}</span>
            ) : null}
          </div>
          <Link href={`${url}`}>
            <a className="link"></a>
          </Link>
        </div>

        <style jsx>{`
          .card {
            border-radius: 10px;
            border: 3px solid #f7f7f7;
            color: ${BLUE};
            cursor: pointer;
            display: flex;
            flex-direction: column;
            width: 325px;
            max-width: 900px;
            min-width: 400px;
            margin: 0 10px 10px 0;
            font-size: 12px;
          }
          .wrap {
            padding: 25px 30px;
          }
          .column {
            display: flex;
            flex-direction: column;
          }
          h3 {
            font-size: 16px;
            margin-bottom: 20px;
          }
          .category {
            margin-bottom: 30px;
          }
          .row {
            display: flex;
            justify-content: space-between;
            width: 90%;
          }
          .location {
            font-weight: bold;
            display: flex;
            align-items: center;
          }
          .location::before {
            content: "";
            background-image: url(${LOCATION_ICON});
            width: 15px;
            height: 15px;
            display: block;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 5px;
          }
          .footer {
            border-top: 3px solid #f7f7f7;
            margin-top: 70px;
            display: flex;
            padding: 20px 30px;
            justify-content: space-between;
          }
          .dayAgo {
            color: #a9adbb;
          }
          .author {
            font-size: 14px;
            font-weight: bold;
            margin-top: 5px;
          }
          .card:hover {
            color: #fff;
            background: ${BLUE};
          }
          .card:hover a,
          a:hover {
            color: #fff;
          }
          .link {
            background-color: #f7f7f7;
            width: 50px;
            height: 50px;
            border-radius: 10px;
            background-image: url(${MORE_ICON});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 50%;
          }
        `}</style>
      </div>
    </Link>
  );
}
