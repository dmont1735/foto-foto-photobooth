import DMLogoWhite from "/src/assets/logos/DM/DM-logo-white.svg";
import LinkedInLogoWhite from "/src/assets/logos/linkedin/linkedin-icon-white.svg";
import GitHubLogoWhite from "/src/assets/logos/github/github-icon-white.svg";

export default function Footer(){
    return(
        <footer>
                <div className="social-links">
                    <a href="/" target="_blank"><img src={DMLogoWhite} alt="Daniel Monteiro Logo"/></a>
                    <a href="https://www.linkedin.com/in/danielarmonteiro/" target="_blank"><img src={LinkedInLogoWhite} alt="LinkedIn Logo"/></a>
                    <a href="https://github.com/dmont1735" target="_blank"><img src={GitHubLogoWhite} alt="GitHub Logo"/></a>
                </div>
            <span className="copywright"> © 2025 Daniel Monteiro. All Rights Reserved.</span>
        </footer>
    );
}
