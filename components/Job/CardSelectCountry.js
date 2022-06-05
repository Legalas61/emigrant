import Link from "next/link";
import { BLUE, COUNTRY } from "../global";

const searchInName = (name) => {
  for (const county of COUNTRY) {
    if (county.name === name) {
      return county.in;
    }
  }
};

export default function SelectCard({ nameCountry, url = "/", card = [] }) {
  let body = null;
  if (nameCountry) {
    if (nameCountry === "Далее") {
      body = <h4>Просмотреть больше работ</h4>;
    } else {
      body = (
        <div key={card.location}>
          <h4>Работа {searchInName(nameCountry)}</h4>
          <span>
            {card.length !== 0 ? "количество вакансий: " + card.count : null}
          </span>
          <style jsx>{`
            div {
              display: flex;
              flex-direction: column;
              text-align: left;
            }
            h4 {
              font-size: 14px;
            }
            span {
              font-size: 10px;
            }
          `}</style>
        </div>
      );
    }
  } else {
    body = (
      <>
        <div key={card.location}>
          <span className="location">{card.location}</span>
        </div>
        <div>
          <h4>{card.title}</h4>
          <p className="description">{card.description}</p>
          <div>
            <span className="category">{card.category}</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <Link href={url}>
      <div className="box">
        {body}
        <style jsx>{`
          .box {
            border-radius: 10px;
            border: 3px solid #f7f7f7;
            color: ${BLUE};
            cursor: pointer;
            min-width: 250px;
            max-width: 450px;
            flex-grow: 1;
            text-align: center;
            padding: 15px 10px;
            margin: 0 10px 10px 0;
            display: flex;
            align-items: center;
            column-gap: 30px;
          }
          .box:hover {
            color: #fff;
            background: ${BLUE};
          }
          .box span {
            background: red;
          }

          @media screen and (max-width: 995px) {
            .box {
              padding: 3px;
            }
          }
        `}</style>
      </div>
    </Link>
  );
}
