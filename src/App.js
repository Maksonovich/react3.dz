import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/portfolio";
import Advantage from "./components/Advantage/Advantage";
import './scss/style.scss'

function App() {
  return (
    <>
    <Header/>
     <main>
      <About/>
      <Portfolio/>
      <Services/>
      <Advantage/>
     </main>
     <Footer/>
    </>
  );
}

export default App;
