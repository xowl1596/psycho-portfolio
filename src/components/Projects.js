import { Accordion } from "react-bootstrap";
import "../css/projects.css";

import coloursLogo from '../assets/logo-colours.svg';
function Projects() {
  return (
	<>
		<p className="section-title">Projects</p>
		<div className="Projects">
		<Accordion defaultActiveKey={['0']} alwaysOpen>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					<img src={coloursLogo} className="svg-logo"></img>컬러스 (2022-02 ~ 2022-06)(폐업)
				</Accordion.Header>
				<Accordion.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
				est laborum.
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					<img src={require("../assets/logo-makitcodelab.png")}/>메이킷코드랩 (2021-01 ~ 2022-01)
				</Accordion.Header>
				<Accordion.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
				est laborum.
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header><img src={require("../assets/logo-webtoonguide.png")}/>웹툰가이드 (2020-04 ~ 2020-12)</Accordion.Header>
				<Accordion.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
				est laborum.
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
		</div>
	</>
  );
}

export default Projects;
