import Head from "next/head";
import axios from "axios";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import GlobalWrap from "../../components/GlobalWrap";
import AddNewAdsBtn from "../../components/Job/AddAdsBtn";
import BestCountry from "../../components/Job/listCountryPage/Best";
import ListCountry from "../../components/Job/ListCountry";
import { JOB_URL, SERVER_URL } from "../../components/global";

const FormAddNewAds = dynamic(() =>
  import("../../components/Job/Form/Form.AddNewAds")
);

const SelectCountry = () => {
  const [showForm, setShowForm] = useState(false);
  const [listJobInCountry, setListJob] = useState([]);
  const continents = ["AU", "AS", "EU", "AF", "NA", "LA"];

  useEffect(() => {
    Promise.all(
      continents.map(async (continent) => {
        const apiUrl = `${SERVER_URL}/api/${JOB_URL}/get-jobs/name-count/${continent}`;
        const response = await (await axios.get(apiUrl)).data.message;
        return response;
      })
    ).then((e) => setListJob(e));
  }, []);

  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - выбор страны</title>
      </Head>
      <section>{<BestCountry />}</section>
      {listJobInCountry
        .sort((a, b) => (a.length < b.length ? 1 : -1))
        .map((country) => (
          <section>
            <h2>{country[0] ? country[0].continent : null}</h2>
            <ListCountry key={country} listCountry={country} />
          </section>
        ))}
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
          margin-bottom: 50px;
        }
      `}</style>
    </GlobalWrap>
  );
};

export default SelectCountry;
