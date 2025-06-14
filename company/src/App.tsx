import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/templates/Header";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import SoftwarePage from "./pages/SoftwarePage";
import Foots from "./components/templates/Foots";
import CulturePage from "./pages/CulturePage";
import SmartFarm from "./pages/SmartFarm";
import MarineFarm from "./pages/MarineFarm";
import RoadPage from "./pages/RoadPage";
import VideoProduct from "./pages/VideoProduct";
import ScrollToTop from "./components/atoms/ScrollToTop";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/software/smartfarm" element={<SmartFarm />} />
        <Route path="/solfware/marinefarm" element={<MarineFarm />} />
        <Route path="/video" element={<VideoProduct />} />
        <Route path="/roadpage" element={<RoadPage />} />
      </Routes>
      {!isMainPage && <Foots />}
    </>
  );
}

export default App;
