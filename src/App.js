import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home";
function App() {
  //eslint-disable-next-line
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="news/:name" element={<NewsPage/>} />
        <Route path="search/:search/" element={<SearchPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
