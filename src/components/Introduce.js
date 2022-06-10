import "../css/introduce.css";

function Introduce() {
	return (
		<>
			<p className="section-title">Profile</p>
			<div className="Introduce">
				<div className="main-col-left">
					<img className="profile-picture" src={require('../assets/profile-pic.png')}/>
				</div>
				<div className="main-col-right">
					<h2>소개</h2>
					<h5>이름(Name) : 장태지(1995/03/08)</h5>
					<p>전공(Specialty) : 컴퓨터</p>
					<p>학력(School) : 미공개</p>
					<p>거주지(Live) : 대한민국 인천</p>
					<p>경력(Career) : 개발 1년 6개월, 학원강사 1년</p>
				</div>
			</div>
		</>
	);
}

export default Introduce;
