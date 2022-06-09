import "../css/header.css";

function Header() {
  return (
    <div className="Header">
        <div className='wave wave-1'></div>
        <div className='wave wave-2'></div>
        <div className='wave wave-3'></div>
        <div className='titleWrapper'>
            <div className='title'>Taeji Jang</div>
			      <div className='subtitle'>
              <p>머지않아 대한민국을 손에 넣을 남자</p>
            </div>
        </div>
    </div>
  );
}

export default Header;
