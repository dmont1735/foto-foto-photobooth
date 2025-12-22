import DMLogo from "/src/assets/logos/DM/DM-logo-white.svg";
import cameraLogo from "/src/assets/logos/foto-foto/cameraLogo.svg";
import darkthemeLogo from "/src/assets/dark-theme-logo.svg";

export default function Header(){
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <a href="/"><img src={DMLogo} alt="Daniel Monteiro Logo"/></a>
                    <a href="/"><img src={cameraLogo} alt="Foto-Foto Camera Logo"/></a>
                </div>
                <nav className="navbar">
                    <div className="nav-links">
                        <a href="">Home</a>
                        <a href="">FAQ</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Contact</a>
                    </div>
                </nav>
                <button className="dark-theme-button">Dark Mode<img src={darkthemeLogo}></img></button>
            </div>
            </div>
    );
}
