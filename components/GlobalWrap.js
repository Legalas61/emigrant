import Head from "next/head";
import Aside from "./Aside/Aside";

export default function GlobalWrap({ children }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <main>{children}</main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        main {
          display: flex;
          flex-wrap: wrap;
          width: calc(100% - 120px);
          margin-left: 80px;
          flex-direction: column;
        }

        @media (max-width: 600px) {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          transition: width ease-in-out 0.15s;
        }
      `}</style>
    </div>
  );
}
