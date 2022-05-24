import Link from "next/link";

import { BLUE } from "../global";

export default function SelectJobCard({
  title,
  category,
  location,
  description,
  url,
}) {
  return (
    <Link href={url}>
      <div className="card">
        <h3>{title}</h3>
        <span>
          <b>Категория:</b> {category}
        </span>
        <span>
          <b>Локация:</b> {location}
        </span>
        <p>
          <b>Описание:</b> {description}
        </p>
        <Link href={`${url}`}>Подробнее</Link>

        <style jsx>{`
          .card {
            border-radius: 10px;
            border: 3px solid #f7f7f7;
            color: ${BLUE};
            cursor: pointer;
            display: flex;
            flex-direction: column;
            width: 70%;
            max-width: 900px;
            min-width: 400px;
            padding: 30px;
            margin: 0 10px 10px 0;
            font-size: 14px;
          }
          .card:hover {
            color: #fff;
            background: ${BLUE};
          }
        `}</style>
      </div>
    </Link>
  );
}
