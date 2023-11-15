import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Member from "./components/Member";
import Count from "./components/Count";

import Project from "./components/Project";
import Bussiness from "./components/Bussiness";

import Video from "./components/Video";
import Review from "./components/Review";

import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { observerAnimate } from "./observer";

const App = function () {
  useEffect(() => {
    observerAnimate();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Member />
        <Count />
        <Project />
        <Bussiness />
        <Video />
        <Review />
        <News />
      </main>
      <Footer />
    </>
  );
};

export default App;
