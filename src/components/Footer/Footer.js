import github_icon from "../../img/github-icon.png"
import linkedin_icon from "../../img/linkedin-icon.png"
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <p className='text footer-text'>© Kristoffer Spencer - 2022</p>
            <a href="https://www.linkedin.com/in/kristoffer-spencer/"><img src={linkedin_icon} alt='Linkedin' /></a>
            <a href="https://github.com/spencerk80"><img src={github_icon} alt='Github' /></a>
        </footer>
    )
}