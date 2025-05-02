import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/templates/Header";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Foots from "./components/templates/Foots";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
      <Foots />
    </Router>
  );
}

export default App;
