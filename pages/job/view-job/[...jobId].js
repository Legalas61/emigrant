import Head from "next/head";
import GlobalWrap from "../../../components/GlobalWrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL, JOB_URL } from "../../../components/global";

const FullTextJob = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();
  const [dateCreate, setDateCreate] = useState();
  useEffect(() => {
    const idJob = window.location.pathname.split("/view-job/")[1];
    // get job by ID from server
    axios.get(`${SERVER_URL}/api/${JOB_URL}/${idJob}`).then(({ data }) => {
      data = data.message;
      setTitle(data.title);
      setDescription(data.description);
      setCategory(data.category);
      setLocation(
        data.address ? `${data.location}, ${data.address}` : data.location
      );
      setDateCreate(data.dateCreate);
    });
  }, []);
  return (
    <GlobalWrap>
      <Head>
        <title>Балалайка - SOME TEXT</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{category}</span>
      <span>{location}</span>
      <span>{dateCreate}</span>
      <style jsx>{``}</style>
    </GlobalWrap>
  );
};

export default FullTextJob;
