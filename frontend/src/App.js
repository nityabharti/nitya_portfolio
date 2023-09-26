import "./App.css";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import About from "./pages/Home/About/About";
import Projects from "./pages/Home/Projects/Projects";
import Techstack from "./pages/Home/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Jello from "react-reveal/Jello";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          <Jello>
            <h4 className="text-center">Made With ♥️ Nitya &copy;2023</h4>
          </Jello>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ background: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
