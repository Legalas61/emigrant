import Head from "next/head";
import { useState, useEffect } from "react";

import GlobalWrap from "../../components/GlobalWrap";
import {
  BLUE,
  SERVER_URL,
  JOB_URL,
  getFullNameContinentById,
  BORDER,
} from "../../components/global";
import SelectJobCard from "../../components/Job/CardSelectJob";
import axios from "axios";

export default function SelectCard() {
  const [listJob, setListJob] = useState([]);
  const [locationName, setLocationName] = useState();
  const [indexJobNow, setIndexJobNow] = useState(20);
  const [isShowBtnLoadMoreJob, setIsShowBtnLoadMoreJob] = useState(true);

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
          (listJobs) => {
            setListJob(listJobs.data.message);
            // get name location by tag
            setLocationName(getFullNameContinentById(countryId));
            listJobs.data.message.length === 20
              ? setIsShowBtnLoadMoreJob(true)
              : setIsShowBtnLoadMoreJob(false);
          }
        );
        break;

      default:
        // This is county page
        await axios
          .get(`${SERVER_URL}/api/${JOB_URL}/get-jobs/county/${countryId}`)
          .then((listJobs) => {
            setListJob(listJobs.data.message);
            setLocationName(listJobs.data.message[0].location);
            listJobs.data.message.length === 20
              ? setIsShowBtnLoadMoreJob(true)
              : setIsShowBtnLoadMoreJob(false);
          });
        break;
    }
  }, []);

  const loadMoreJob = async () => {
    const countryId = window.location.pathname.split("/")[2];

    await axios
      .post(`${SERVER_URL}/api/${JOB_URL}/get-jobs/${countryId}`, {
        indexJobNow: indexJobNow,
      })
      .then(({ data }) => {
        const chunkListJob = data.message;
        // hide btn Load more job
        setIndexJobNow(indexJobNow + 20);
        setListJob(listJob.concat(chunkListJob));
        chunkListJob.length < 20 ? setIsShowBtnLoadMoreJob(false) : null;
      });
  };

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
      {listJob.length <= 20 && isShowBtnLoadMoreJob ? (
        <button className="btn" onClick={loadMoreJob}>
          Загрузить ещё
        </button>
      ) : null}

      <style jsx>{`
        h1 {
          color: #000;
          margin: 20px 0;
          font-size: 24px;
        }
        .wrap {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .btn {
          border: ${BORDER};
          border-radius: 10px;
          width: 150px;
          height: 50px;
          cursor: pointer;
          margin: 0 auto 50px;
          color: ${BLUE};
        }
        .btn:hover {
          background-color: ${BLUE};
          color: #fff;
        }
      `}</style>
    </GlobalWrap>
  );
}
