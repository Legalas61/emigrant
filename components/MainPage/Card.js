import { GREY, ORANGE, YELLOW } from "../global";

const Card = ({ title }) => {
  return (
    <>
      <div className="box">
        <span className="title">{title}</span>
        <div className="grid">
          <span className="prem">Премиум</span>
          <span className="fast">Ускоренные</span>
          <span className="free">Обычные</span>
          <span className="more">Все</span>
        </div>
      </div>
      <style jsx>{`
        .box {
          padding: 10px;
          margin: 10px;
        }
        span {
          padding: 25px 10px;
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
        .prem {
          background-color: ${ORANGE};
        }
        .fast {
          background-color: ${YELLOW};
        }
        .free {
          background-color: ${GREY};
        }
      `}</style>
    </>
  );
};

export default Card;
