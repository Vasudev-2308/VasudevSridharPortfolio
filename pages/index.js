/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vdx's Portfolio</title>
      </Head>

      <Navbar/>

      <h1>Hello World</h1>
    </div>
  );
}
