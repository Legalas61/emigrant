// import { D_GREY } from "../global";
import svg from "../../public/aside.svg";

export default function Header() {
  return (
    <header>
      <menu type="context">
        <li>Работа</li>
        <li>Жилье</li>
        <li>Услуги</li>
        <li>Афиша</li>
        <li>Иммиграция</li>
        <li>Визы</li>
        <li>Гражданство</li>
      </menu>
      <style jsx>{`
        header {
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
        }
      `}</style>
    </header>
  );
}
