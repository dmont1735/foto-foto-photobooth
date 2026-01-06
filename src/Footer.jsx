import DMLogoWhite from "/src/assets/logos/DM/DM-logo-white.svg";
import DMLogoDark from "/src/assets/logos/DM/DM-logo-dark.svg";
import LinkedInLogoWhite from "/src/assets/logos/linkedin/linkedin-icon-white.svg";
import LinkedInLogoDark from"/src/assets/logos/linkedin/linkedin-icon-dark.svg";
import GitHubLogoWhite from "/src/assets/logos/github/github-icon-white.svg";
import GitHubLogoDark from "/src/assets/logos/github/github-icon.svg";

export default function Footer({isDarkMode}){

    const dmLogo = isDarkMode? DMLogoDark : DMLogoWhite;
    const linkedinlogo = isDarkMode? LinkedInLogoDark : LinkedInLogoWhite;
    const githublogo = isDarkMode? GitHubLogoDark : GitHubLogoWhite;

    return(
        <footer>
                <div className="social-links">
                    <a href="https://www.danielmonteiro.dev" target="_blank"><img src={dmLogo} alt="Daniel Monteiro Logo"/></a>
                    <a href="https://www.linkedin.com/in/danielarmonteiro/" target="_blank"><img src={linkedinlogo} alt="LinkedIn Logo"/></a>
                    <a href="https://github.com/dmont1735" target="_blank"><img src={githublogo} alt="GitHub Logo"/></a>
                </div>
            <span className="copywright">© 2025 Daniel Monteiro. All Rights Reserved.</span>
        </footer>
    );
}
