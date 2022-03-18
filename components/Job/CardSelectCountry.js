import Link from "next/link";

import { BLUE } from "../global";

export default function SelectCard({ nameCountry, url }) {
  if (url === undefined) {
    url = "/";
  }
  return (
    <Link href={url}>
      <div className="box">
        <h4>Работа в {nameCountry}</h4>

        <style jsx>{`
          .box {
            border-radius: 10px;
            border: 3px solid #f7f7f7;
            color: ${BLUE};
            cursor: pointer;
            width: 250px;
            padding: 30px;
            margin: 0 10px 10px 0;
          }
          .box:hover {
            color: #fff;
            background: ${BLUE};
          }
        `}</style>
      </div>
    </Link>
  );
}
