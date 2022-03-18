import {
  JOB_URL,
  HOME_ICON_BLUE,
  JOB_ICON_BLUE,
  BUSINESS_ICON_BLUE,
  COUPON_ICON_BLUE,
  TRACTOR_ICON_BLUE,
  PLANET_ICON_BLUE,
  PASS_ICON_BLUE,
  BLUE,
  RUS_FLAG,
} from "../global";
import Link from "next/link";
import { useRouter } from "next/router";
import svg from "../../public/aside.svg";

export default function Aside() {
  const router = useRouter();
  let weightAside = "50px";

  if (router.pathname === "/") {
    weightAside = "360px";
  }

  return (
    <aside>
      <Link href="/">
        {/* TODO:сделать анимацию */}
        <img
          src={`${RUS_FLAG}`}
          className="logo"
          alt="на главную"
          title="на главную"
        />
      </Link>
      <menu>
        <Link href={JOB_URL}>
          <li className="job">
            <a>Работа</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="home">
            <a>Жилье</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="business">
            <a>Услуги</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="coupon">
            <a>Афиша</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="tractor">
            <a>Иммиграция</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="planet">
            <a>Визы</a>
          </li>
        </Link>
        <Link href="/job/">
          <li className="pass">
            <a>Гражданство</a>
          </li>
        </Link>
      </menu>
      <style jsx>{`
        aside {
          background-image: url(${svg.src});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: top right;
          width: ${weightAside};
          height: 100vh;
          min-height: 750px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          position: fixed;
          top: 0;
        }
        aside:hover {
          width: 360px;
        }
        aside,
        li a {
          overflow: hidden;
        }
        li {
          cursor: pointer;
          list-style: none;
          height: 32px;
          background-repeat: no-repeat;
          background-size: 32px;
          background-position: 15px center;
          background-color: #fff;
          padding: 30px;
          margin-bottom: 10px;
          border-radius: 10px;
          width: max-content;
        }
        li:before {
          left: 35px;
          top: 5px;
          text-transform: uppercase;
          font-size: 24px;
        }
        li a {
          width: 0;
          display: block;
          color: ${BLUE};
        }
        li:hover {
          box-shadow: 0px 5px 10px 2px rgba(71, 55, 140, 0.2);
        }
        li:hover a {
          margin-left: 30px;
          margin-top: -7px;
          width: max-content;
        }
        .job {
          background-image: url(${JOB_ICON_BLUE});
        }
        .home {
          background-image: url(${HOME_ICON_BLUE});
        }
        .business {
          background-image: url(${BUSINESS_ICON_BLUE});
        }
        .coupon {
          background-image: url(${COUPON_ICON_BLUE});
        }
        .tractor {
          background-image: url(${TRACTOR_ICON_BLUE});
        }
        .planet {
          background-image: url(${PLANET_ICON_BLUE});
        }
        .pass {
          background-image: url(${PASS_ICON_BLUE});
        }
        .logo {
          height: 50px;
          position: fixed;
          top: 50px;
          left: 15px;
          cursor: pointer;
        }
      `}</style>
    </aside>
  );
}
