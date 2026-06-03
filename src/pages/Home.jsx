import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BackendExpertise from "../components/BackendExpertise";
import GithubActivity from "../components/GithubActivity";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress"
const Home = () => {
  return (
    <>
    
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <BackendExpertise />

      <GithubActivity />

      <Journey />

      <Contact />

      <Footer />

      <ScrollProgress/>
    </>
  );
};

export default Home;