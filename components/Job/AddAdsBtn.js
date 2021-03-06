import { BLUE, SHADOW } from "../global";

const AddNewAdsBtn = ({ title, status, action }) => {
  return (
    <button onClick={() => action(!status)}>
      {title}
      <style jsx>{`
        button {
          background-color: #fff;
          position: fixed;
          border: none;
          padding: 10px;
          cursor: pointer;
          color: ${BLUE};
          box-shadow: ${SHADOW};
          border-radius: 10px;
          top: 90vh;
          left: calc(90vw - 100px);
        }
        button:hover {
          background-color: ${BLUE};
          color: #fff;
        }
      `}</style>
    </button>
  );
};

export default AddNewAdsBtn;
