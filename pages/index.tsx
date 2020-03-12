import Head from "next/head";
import App from "../app/components/App";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function Index() {
  return (
    <>
      <style jsx>{`
        :global(html, body) {
          background: #eee;
        }
      `}</style>
      <Head>
        <title key="title">
          anitech2020-spring-sample | Layer support example for Fabric.js
        </title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.css"
        ></link>
      </Head>
      <Header />
      <App width={800} height={800} />
      <Footer />
    </>
  );
}
