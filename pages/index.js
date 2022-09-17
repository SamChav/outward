import Head from "next/head";
import React, { useEffect, useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Samples from "../components/Samples";
const App = (props) => {
  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
      </Head>
      <div>
        <Header />
        <About />
        <Samples />
      </div>
    </div>
  );
};

export default App;
