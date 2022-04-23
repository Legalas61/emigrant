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
        <>
          <h4>Работа {searchInName(nameCountry)}</h4>
          <span>
            {card.length !== 0 ? "количество вакансий:" + card.count : null}
          </span>
        </>
      );
    }
  } else {
    body = (
      <>
        <div>
          <span className="location">{card.location}</span>
        </div>
        <div>
          <h4>{card.title}</h4>
          <p className="description">{card.description}</p>
          <div>
            <span className="category">{card.category}</span>
          </div>
        </div>

        <style jsx>{`
          * {
            margin: 0;
          }
          h4 {
            font-size: 18px;
          }
          .category {
            border-radius: 10px;
            background-color: #f7f7f7;
            font-size: 10px;
            padding: 5px;
            white-space: nowrap;
            color: ${BLUE};
          }
          .description {
            font-size: 12px;
            margin: 5px 0;
            display: block;
            text-align: left;
          }
          .location {
            font-size: 12px;
            width: 50px;
            display: block;
            text-align: center;
          }
        `}</style>
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
