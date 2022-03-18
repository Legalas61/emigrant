import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import GlobalWrap from "../../components/GlobalWrap";
import AddNewAdsBtn from "../../components/Job/AddAdsBtn";
import SelectCard from "../../components/Job/CardSelectCountry";
const FormAddNewAds = dynamic(() =>
  import("../../components/Job/FormAddNewAds")
);

const JSON_OnSever = [
  { ISO: "DE", name: "Германия", in: "Германии" },
  { ISO: "ES", name: "Испания", in: "Испании" },
  { ISO: "PL", name: "Польша", in: "Польше" },
  { ISO: "CZ", name: "Чехия", in: "Чехии" },
  { ISO: "CA", name: "Канада", in: "Канаде" },
  { ISO: "US", name: "США", in: "США" },
];

const JSON = ["DE", "ES", "PL", "CZ", "CA", "US"];

const SelectCountry = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - выбор страны</title>
      </Head>

      <section>
        <h2>Популярное</h2>
        <div className="list">
          {JSON.map((i) =>
            JSON_OnSever.map((j) =>
              i === j.ISO ? (
                <SelectCard nameCountry={j.in} url={`job/${j.ISO}`} />
              ) : null
            )
          )}
        </div>
      </section>
      <section>
        <h3>Австралия и Океания</h3>
        <p>В процессе разработки</p>
      </section>
      <section>
        <h3>Азия</h3>
        <p>В процессе разработки</p>
      </section>
      <section>
        <h3>Карибский бассейн</h3>
        <p>В процессе разработки</p>
      </section>
      <section>
        <h3>Европа</h3>
        <div className="list">
          <SelectCard nameCountry={"Германии"} url={"job/germane"} />
          <SelectCard nameCountry={"Испании"} />
          <SelectCard nameCountry={"Польше"} />
          <SelectCard nameCountry={"Чехии"} />
        </div>
      </section>
      <section>
        <h3>Африка</h3>
        <p>В процессе разработки</p>
      </section>
      <section>
        <h3>Северная Америка</h3>
        <p>В процессе разработки</p>
      </section>
      <section>
        <h3>Латинская Америка</h3>
        <p>В процессе разработки</p>
      </section>
      <AddNewAdsBtn
        title={"Добавить объявление"}
        status={showForm}
        action={setShowForm}
      />
      {showForm ? (
        <FormAddNewAds status={showForm} action={setShowForm} />
      ) : null}

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </GlobalWrap>
  );
};

export default SelectCountry;
