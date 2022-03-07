import {
  GREY,
  JOB_ICON,
  HOME_ICON,
  BUSINESS_ICON,
  COUPON_ICON,
} from "../global";

const Card = ({ title, text }) => {
  let icon = undefined;
  switch (title) {
    case "Работа":
      icon = JOB_ICON;
      break;
    case "Жилье":
      icon = HOME_ICON;
      break;
    case "Услуги":
      icon = BUSINESS_ICON;
      break;
    case "Афиша":
      icon = COUPON_ICON;
      break;
  }
  return (
    <>
      <div className="box">
        <h2 className="title">{title}</h2>
        <div className="grid">
          <span>{text}</span>
        </div>
      </div>
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
          box-shadow: 0px 0px 15px 5px rgba(154, 154, 165, 0.14);
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
