import DMLogo from "/src/assets/logos/DM/DM-logo-white.svg";
import DMLogoDark from "/src/assets/logos/DM/DM-logo-dark.svg";
import cameraLogo from "/src/assets/logos/foto-foto/cameraLogo.svg";
import darkModeLogo from "/src/assets/logos/dark-mode/dark-mode.svg";
import lightModeLogo from "/src/assets/logos/dark-mode/light-mode.svg";

export default function Header({isDarkMode, onDarkMode}){
    function handleChangeDarkMode(){
        onDarkMode();
    }
    const dmLogo = isDarkMode? DMLogoDark : DMLogo;
    const modeLogo = isDarkMode?  lightModeLogo : darkModeLogo;

    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <a href="/"><img src={dmLogo} alt="Daniel Monteiro Logo"/></a>
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
                <button className="dark-theme-button" onClick={handleChangeDarkMode}>{isDarkMode? "Light Mode":"Dark Mode"}<img src={modeLogo}></img></button>
            </div>
        </div>
    );
}
