import "../css/contact.css";

function Contact() {
	const sideMenuItems = [
        {src : require('../assets/icon-github.png'), href : "https://github.com/xowl1596"},
        {src : require('../assets/icon-email.png'), href : "mailto:xowl1596@gmail.com"},
        {src : require('../assets/icon-tel.png'), href : "tel:010-4150-7218"}
    ];

	const ICON_LEN = "60px";

    function appendContactItems(){
        let result = [];

        for(let i=0; i < sideMenuItems.length; i++){
            result.push(
                <a href={sideMenuItems[i].href}>
                    <img src={sideMenuItems[i].src} width={ICON_LEN} height={ICON_LEN}></img>
                </a>
            );
        }
        return result;
    }

	return (
		<div className="contact-wrapper">
			<p className="section-title">Contact</p>
			<div className="Contact">
				{appendContactItems()}
			</div>
		</div>
  	);
}

export default Contact;
