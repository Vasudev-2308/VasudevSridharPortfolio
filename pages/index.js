/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";



export default function Home() {
  const link = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Poppins:wght@100;300;400;700&display=swap"
  return (

    <div>
      <Head>
      <link href={link} />
        <title>Vdx's Portfolio</title>
      </Head>
      <Navbar />   
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}


