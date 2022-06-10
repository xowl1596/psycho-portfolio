import "../css/main.css";
import Contact from "./Contact";
import Introduce from "./Introduce";
import Projects from "./Projects";
import TechStack from "./TechStack";

function Main() {
  return (
    <div className="Main">
		<Introduce/>
    <TechStack/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default Main;
