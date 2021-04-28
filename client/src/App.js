import Home from "./pages/Home";
import Footer from "./pages/static/Footer";
import Preloader from "./pages/static/Preloader";
import Header from "./pages/static/Header";

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
