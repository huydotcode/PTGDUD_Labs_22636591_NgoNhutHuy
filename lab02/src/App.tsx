import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
