import Link from "next/link";
import {
  GREY,
  JOB_ICON_BLACK,
  HOME_ICON_BLACK,
  COUPON_ICON_BLACK,
  BUSINESS_ICON_BLACK,
  SHADOW,
} from "../global";

const Card = ({ title, text, url }) => {
  let icon = undefined;
  switch (title) {
    case "Работа":
      icon = JOB_ICON_BLACK;
      break;
    case "Жилье":
      icon = HOME_ICON_BLACK;
      break;
    case "Услуги":
      icon = BUSINESS_ICON_BLACK;
      break;
    case "Афиша":
      icon = COUPON_ICON_BLACK;
      break;
  }
  return (
    <>
      <Link href={`${url}`}>
        <div className="box">
          <h2 className="title">{title}</h2>
          <div className="grid">
            <span>{text}</span>
          </div>
        </div>
      </Link>

      <style jsx>{`
        h2 {
          font-size: 18px;
        }
        span {
          font-size: 12px;
          width: 50%;
          color: ${GREY};
        }
        .box {
          max-width: 300px;
          padding: 10px;
          margin: 10px 0;
          box-shadow: ${SHADOW};
          border-radius: 10px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .box:before {
          content: "";
          position: absolute;
          width: 32px;
          height: 32px;
          bottom: 14px;
          right: 14px;
          z-index: -1;
          background: url(${icon}) no-repeat;
          transform: rotate(-30deg) scale(3.8);
          opacity: 0.3;
        }
        .box:hover:before {
          transform: rotate(0deg) scale(3.8);
        }
        .grid {
          display: grid;
          grid-template-columns: max-content max-content;
          grid-row-gap: 0.5em;
          grid-column-gap: 0.5em;
        }
        .title {
          display: flex;
          padding: 0;
          margin: 25px 0;
        }
      `}</style>
    </>
  );
};

export default Card;
