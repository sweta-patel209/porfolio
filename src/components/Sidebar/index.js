import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sweta.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faFacebook,
  } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink
                exact='true'
                activeclassname='active'
                to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact='true'
                activeclassname='active'
                className='about-link'
                to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact='true'
                className='contact-link'
                activeclassname='active'
                to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"  
                href='http://linkedin.com/in/sweta-patel-1ba871175'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"  
                href='https://github.com/sweta-patel209'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            {/* <li>
                <a 
                target="_blank" 
                rel="noreferrer"  
                href='skype:live:myusname'
                >
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li> */}
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"  
                href='https://www.facebook.com/profile.php?id=100020740911041mibextid=LQQJ4d'
                >
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;