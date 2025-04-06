import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import YourRecipeBox from "./pages/your-recipe-box/YourRecipeBox";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-[1400px] mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="your-recipe-box" element={<YourRecipeBox />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
