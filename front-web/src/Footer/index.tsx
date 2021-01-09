import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon} from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="linkedin.com/in/matthews-lima-951b29194" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
       
    )
}

export default Footer;