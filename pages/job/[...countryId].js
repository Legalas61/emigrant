import Head from "next/head";
import { useState, useEffect } from "react";

import GlobalWrap from "../../components/GlobalWrap";
import {
  BLUE,
  SERVER_URL,
  JOB_URL,
  getFullNameContinentById,
} from "../../components/global";
import SelectJobCard from "../../components/Job/CardSelectJob";
import axios from "axios";

export default function SelectCard() {
  const [listJob, setListJob] = useState([]);
  const [locationName, setLocationName] = useState();

  // Проверка на страну или континент
  useEffect(async () => {
    const countryId = window.location.pathname.split("/")[2];

    switch (countryId) {
      // function on btn MORE
      case "NA":
      case "LA":
      case "AS":
      case "EU":
      case "AU":
      case "AF":
        await axios(`${SERVER_URL}/api/${JOB_URL}/get-jobs/${countryId}`).then(
          (listJob) => {
            setListJob(listJob.data.message);
            // get name location by tag
            setLocationName(getFullNameContinentById(countryId));
          }
        );
        break;

      default:
        await axios
          .get(`${SERVER_URL}/api/${JOB_URL}/get-jobs/county/${countryId}`)
          .then((listJob) => {
            setListJob(listJob.data.message);
            setLocationName(listJob.data.message[0].location);
          });
        break;
    }
  }, []);

  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - Список работы в {locationName}</title>
      </Head>

      <h1>{locationName} - список работы </h1>
      <div className="wrap">
        {listJob.map((job) => (
          <SelectJobCard
            title={`${job.title}`}
            category={`${job.category}`}
            location={`${job.location}`}
            dateCreate={`${job.updatedAt ? job.updatedAt : job.dateCreate}`}
            author={`${job.author ? job.author : job.name}`}
            fullTime={job.fullTime}
            partTime={job.partTime}
            url={"view-job/" + String(job.id)}
            key={job.id}
          />
        ))}
      </div>

      <style jsx>{`
        h1 {
          color: #000;
          margin: 20px 0;
          font-size: 24px;
        }
        .wrap {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </GlobalWrap>
  );
}
