import "../css/introduce.css";

function Introduce() {
  return (
    <div className="Introduce">
        <div className="main-col-left">
            <img className="profile-picture" src={require('../assets/profile-pic.png')}/>
        </div>
        <div className="main-col-right">
            <h2>소개</h2>
            <h5>이름(Name) : 장태지(1995/03/08)</h5>
            <p>전공(Specialty) : 컴퓨터</p>
            <p>학력(School) : 미공개</p>
            <p>거주지(Live) : 대한민국</p>
            <p>경력(Career) : 개발 1년, 학원강사 1년</p>

            <h2 class="mt-5">주요 기술</h2>
            <h3>Web</h3>
            <h5>PHP</h5>
            <p>Laravel, CodeIgniter</p>
            <h5>JAVA</h5>
            <p>Spring</p>

            <h3>Misc</h3>
            <h5>Python</h5>
        </div>
    </div>
  );
}

export default Introduce;
