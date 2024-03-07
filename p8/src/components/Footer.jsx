import "./Footer.scss"
import logoKasa from "../assets/image/LOGO.png";


const Footer= () => {
	return (
		<footer className="footer-section">
			<img src={logoKasa} className="footer-logo" alt="Logo" />
			<h3 className="footer-text">© 2020 Kasa. All rights reserved</h3>
		</footer>
	)
}

export default Footer