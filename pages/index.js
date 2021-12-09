import Head from "next/head";
import GlobalWrap from "../components/GlobalWrap";
import Card from "../components/MainPage/Card";

const Home = () => {
  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - главная страница</title>
      </Head>

      <section>
        <Card title="Работа" />
        <Card title="Жилье" />
        <Card title="Услуги" />
        <Card title="Афиша" />
      </section>

      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </GlobalWrap>
  );
};

export default Home;
