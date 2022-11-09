/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vdx's Portfolio</title>
      </Head>
      <Navbar />
      {/* <Hero />
      <Projects />
      <Technologies/>
      <Accomplishments/> */}
      {/* <Footer/> */}

    </div>
  );
}
