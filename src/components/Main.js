import "../css/main.css";
import Introduce from "./Introduce";
import Projects from "./Projects";
import TechStack from "./TechStack";

function Main() {
  return (
    <div className="Main">
		<Introduce/>
    <TechStack/>
    <Projects/>
    </div>
  );
}

export default Main;
