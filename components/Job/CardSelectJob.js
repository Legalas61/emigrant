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
        <span>{category}</span>
        <span>{location}</span>
        <p>{description}</p>
        <Link href={`job/${url}`}>Подробнее</Link>

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
