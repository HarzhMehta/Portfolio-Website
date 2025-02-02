import { Experience } from "./components/Experience";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
