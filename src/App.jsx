import About from "./components/About";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import History from "./components/History";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Alumni from "./components/Alumni";
import Memories from "./components/Memories";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Achievements></Achievements>
      <Projects></Projects>
      <Team></Team>
      {/* <Alumni></Alumni> */}
      <Sponsors></Sponsors>
      <History></History>
      <Memories></Memories>
      <Contact></Contact>
    </>
  );
}

export default App;
