import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "Pages/Home";
import FabComp from "Components/Layout/fabComp";
import Header from "Components/Layout/header";
import Fade from "react-reveal/Fade";
import { useSelector } from "./Store";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import SingleDesign from "./components/singleDesign/singleDesign";
// import UIDesigns from "./components/UIDesigns/UIDesigns";
// import Articles from "./components/Articles/Articles";

function AppRoutes() {
  const showHeader = useSelector((state) => state.app.showHeader);
  const location = useLocation();

  return (
    <>
      <Fade bottom when={showHeader} collapse>
        <Header />
      </Fade>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ui-designs" element={<UIDesigns />} />
          <Route path="/single-design" element={<SingleDesign />} />
          <Route path="/articles" element={<Articles />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {location.pathname !== "/single-design" && <FabComp />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
