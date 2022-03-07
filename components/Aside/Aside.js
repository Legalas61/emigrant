import {
  HOME_ICON,
  JOB_ICON,
  BUSINESS_ICON,
  COUPON_ICON,
  TRACTOR_ICON,
  PLANET_ICON,
  PASS_ICON,
} from "../global";
import svg from "../../public/aside.svg";

export default function Aside() {
  return (
    <aside>
      <menu>
        <li className="job">Работа</li>
        <li className="home">Жилье</li>
        <li className="business">Услуги</li>
        <li className="coupon">Афиша</li>
        <li className="tractor">Иммиграция</li>
        <li className="planet">Визы</li>
        <li className="pass">Гражданство</li>
      </menu>
      <style jsx>{`
        aside {
          background-image: url(${svg.src});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right;
          width: 360px;
          min-width: 250px;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
        li {
          cursor: pointer;
          position: relative;
          list-style: none;
        }
        li:before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 0;
          left: -20px;
          opacity: 0.6;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .job:before {
          background-image: url(${JOB_ICON});
        }
        .home:before {
          background-image: url(${HOME_ICON});
        }
        .business:before {
          background-image: url(${BUSINESS_ICON});
        }
        .coupon:before {
          background-image: url(${COUPON_ICON});
        }
        .tractor:before {
          background-image: url(${TRACTOR_ICON});
        }
        .planet:before {
          background-image: url(${PLANET_ICON});
        }
        .pass:before {
          background-image: url(${PASS_ICON});
        }
      `}</style>
    </aside>
  );
}
