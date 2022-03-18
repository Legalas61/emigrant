import Head from "next/head";
import GlobalWrap from "../components/GlobalWrap";
import Card from "../components/MainPage/Card";
import { BLUE, JOB_URL } from "../components/global";

const Home = () => (
  <GlobalWrap>
    <Head>
      <title>Балалайка - главная страница</title>
    </Head>

    <section>
      <div className="left">
        <span>Балалайка</span>
        <h1>Интернет-портал для наших за бугром</h1>
      </div>
      <div className="right">
        <Card
          title="Работа"
          text="Вакансии от работодателей и резюме соискателей."
          url={JOB_URL}
        />
        <Card
          title="Жилье"
          text={"Аренда и продажа недвижимости от собственников и риэлторов."}
        />
        <Card title="Услуги" text={"Каталог бизнесов и сервисов мигрантов."} />
        <Card
          title="Афиша"
          text={"Онлайн-продажа билетов на лучшие события в стране."}
        />
      </div>
    </section>

    <style jsx>{`
      h1,
      span {
        align-self: start;
        text-transform: uppercase;
      }
      span {
        font-size: 25px;
        font-weight: bold;
        color: WHITE;
        background-color: ${BLUE};
        width: max-content;
        padding: 15px 5px;
        align-self: left;
        border-radius: 10px;
      }
      section {
        display: flex;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
      }
      .left {
        width: 50%;
        margin-right: 20px;
        max-width: 400px;
      }
    `}</style>
  </GlobalWrap>
);

export default Home;
