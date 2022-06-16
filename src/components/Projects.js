import { Accordion, Image } from "react-bootstrap";
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
					<div className="text-center">
						<img src={require("../assets/project-ilgammaster.png")} className="project-img rounded"></img>
						<img src={require("../assets/project-ilgammaster2.png")} className="project-img rounded"></img>
						<img src={require("../assets/project-ilgammaster3.png")} className="project-img rounded"></img>
						<img src={require("../assets/project-ilgammaster4.png")} className="project-img rounded"></img>
					</div>
					<h4><a href="https://ilgammaster.cafe24.com/">일감의 달인</a></h4>
					<p>구인구직 플랫폼 '일감의 달인' 개발 (현재 개발 잠정 중단)</p>
					<h5>사용 언어/기술</h5>
					<img className="tech-badge" src="https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=php&logoColor=white"></img>
					<img className="tech-badge" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"></img>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					<img src={require("../assets/logo-makitcodelab.png")}/>메이킷코드랩 (2021-01 ~ 2022-01)
				</Accordion.Header>
				<Accordion.Body>
					<div className="text-center">
						<img src={require("../assets/project-makit1.png")} className="project-img rounded"></img>
						<img src={require("../assets/project-makit2.png")} className="project-img rounded"></img>
					</div>
					<h4><a href="http://makitcodelab.com/">메이킷토드랩 학원강사</a></h4>
					<p>수업 교재 개발 및 아두이노, 스크래치, 파이썬 수업 등의 강사 활동</p>
					<h5>사용 언어/기술</h5>
						<img className="tech-badge" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>
						<img className="tech-badge" src="https://img.shields.io/badge/scratch-4D97FF?style=for-the-badge&logo=scratch&logoColor=white"></img>
						<img className="tech-badge" src="https://img.shields.io/badge/arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white"></img>
						<img className="tech-badge" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header><img src={require("../assets/logo-webtoonguide.png")}/>웹툰가이드 (2020-04 ~ 2020-12)</Accordion.Header>
				<Accordion.Body>
					<div className="text-center">
						<img src={require("../assets/project-cims.png")} className="project-img rounded"></img>
					</div>
					<h4><a href="https://cims.webtoonguide.com/">CIMS (Copyright Infringement Monitoring System)</a></h4>
					<p>웹툰/웹소설 콘텐츠를 불법 복제/배포하는 사이트 모니터링 및 데이터 수집, 수집된 데이터를 바탕으로 불법 복제에 대응하는 시스템</p>
					<p>DB 설계 및 구현 및 사이트 개발 참여</p>
					<h5>사용 언어/기술</h5>
					<img className="tech-badge" src="https://img.shields.io/badge/laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"></img>
					<img className="tech-badge" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"></img>
					<img className="tech-badge" src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"></img>
					<img className="tech-badge" src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"></img>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>사이드 프로젝트</Accordion.Header>
				<Accordion.Body>
					<div className="text-center">
						<img src={require("../assets/project-llama.png")} className="project-img rounded"></img>
						<img src={require("../assets/project-llama2.png")} className="project-img rounded"></img>
					</div>
					<h4>침뱉는 라마(2022-01)</h4>
					<p>디스코드 봇(토이 프로젝트)</p>
					<h5>사용 언어/기술</h5>
					<img className="tech-badge" src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"></img>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
		</div>
	</>
  );
}

export default Projects;
