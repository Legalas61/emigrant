import { useState } from "react";
import { BLUE } from "../../global";

export default ({ title, data }) => {
  const [dynamicTitle, setDynamicTitle] = useState(title);

  return (
    <>
      <span
        className={data === dynamicTitle ? null : "hider"}
        onClick={() => setDynamicTitle(data)}
      >
        {dynamicTitle}
      </span>
      <style jsx>{`
        .hider {
          padding: 5px;
          background-color: ${BLUE};
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
