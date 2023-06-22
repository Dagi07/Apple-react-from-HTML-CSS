import Header from "./components/Header";
import I11pro from "./components/I11pro";
import Ieleven from "./components/Ieleven";
import MacSection from "./components/MacSection";
import Watchsec from "./components/Watchsec";
import Tvandairpods from "./components/Tvandairpods";
import Cardandarcade from "./components/Cardandarcade";
import Footer from "./components/Footer";
import "./app.css"


function App() {
  return (
    <div className="App">
      <Header />
      <MacSection />
      <I11pro />
      <Ieleven />
      <Watchsec />
      <Tvandairpods />
      <Cardandarcade />
      <Footer />
    </div>
  );
}

export default App;
