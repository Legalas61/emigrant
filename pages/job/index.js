import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import GlobalWrap from "../../components/GlobalWrap";
import AddNewAdsBtn from "../../components/Job/AddAdsBtn";
import SelectCard from "../../components/Job/CardSelectCountry";
import ListCountry from "../../components/Job/ListCountry";
const FormAddNewAds = dynamic(() =>
  import("../../components/Job/Form/Form.AddNewAds")
);

const SelectCountry = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - выбор страны</title>
      </Head>

      <section>
        <h2>Популярное</h2>
        {<ListCountry label={"tp"} />}
      </section>
      <section>
        <h3>Австралия и Океания</h3>
        {<ListCountry label={"AU"} />}
      </section>
      <section>
        <h3>Азия</h3>
        {<ListCountry label={"AS"} />}
      </section>
      <section>
        <h3>Европа</h3>
        {<ListCountry label={"EU"} />}
      </section>
      <section>
        <h3>Африка</h3>
        {<ListCountry label={"AF"} />}
      </section>
      <section>
        <h3>Северная Америка и Карибский бассейн</h3>
        {<ListCountry label={"NA"} />}
      </section>
      <section>
        <h3>Латинская Америка</h3>
        {<ListCountry label={"LA"} />}
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
      `}</style>
    </GlobalWrap>
  );
};

export default SelectCountry;
