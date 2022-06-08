import "../css/header.css";

function Header() {
  return (
    <div className="Header">
        <div className='wave wave-1'></div>
        <div className='wave wave-2'></div>
        <div className='wave wave-3'></div>
        <div className='titleWrapper'>
            <div className='title'>Taeji Jang</div>
			<div className='subtitle'>(Psycho)</div>
        </div>
    </div>
  );
}

export default Header;
