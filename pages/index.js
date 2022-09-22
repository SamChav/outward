import Head from "next/head";
import React from "react";
import About from "../components/About";
import Header from "../components/Header";
const App = () => {
  return (
    <div className="root">
      <Head>
        <title>Samuel Chavez - Full Stack Developer</title>
      </Head>
        <Header />
        <About />
    </div>
  );
};

export default App;
