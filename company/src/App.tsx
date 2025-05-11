import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/templates/Header";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import SoftwarePage from "./pages/SoftwarePage";
import Foots from "./components/templates/Foots";
import CulturePage from "./pages/CulturePage";
import SmartFarm from "./pages/SmartFarm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/software/smartfarm" element={<SmartFarm />} />
      </Routes>
      <Foots />
    </Router>
  );
}

export default App;
