import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Member from "./components/Member";
import Count from "./components/Count";

import Project from "./components/Project";
import Bussiness from "./components/Bussiness";

const App = function () {
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
      </main>
      <footer></footer>
    </>
  );
};

export default App;
