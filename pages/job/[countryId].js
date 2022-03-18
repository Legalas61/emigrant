import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import GlobalWrap from "../../components/GlobalWrap";
import { BLUE } from "../../components/global";
import SelectJobCard from "../../components/Job/CardSelectJob";

export default function SelectCard() {
  const router = useRouter();
  const { countryId } = router.query;

  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - Работа в {countryId}</title>
      </Head>
      <h1>Список работы в {countryId}</h1>

      <section>
        <SelectJobCard
          title={"Название"}
          category={"Категория"}
          location={"Локация"}
          description={"Описание"}
          url={"1"}
        />
      </section>

      <style jsx>{`
        h1 {
          color: ${BLUE};
          font-size: 30px;
        }
      `}</style>
    </GlobalWrap>
  );
}
