/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vdx's Portfolio</title>
      </Head>
      <Navbar/>
      <Hero />
      <About/>
      <Technologies/>
      <Projects /> 
      <Contact/>
      
     
      {/* <Footer/> */}

    </div>
  );
}
