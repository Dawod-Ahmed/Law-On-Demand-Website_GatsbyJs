import * as React from "react";

import {
  Header,
  Hero,
  AboutApp,
  AboutUs,
  VideoSec,
  Appeducation,
  DownloadAppSec,
  Footer,
} from "./components";
// import {Route,Sw} from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutApp />
      <AboutUs />
      <VideoSec />
      <Appeducation />
      <DownloadAppSec />
      <Footer />
    </>
  );
}

export default Home;
