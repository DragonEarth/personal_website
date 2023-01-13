import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'

const Sidebar = () => {
    <div className='nav-bar'>
        <link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />

        </link>
    </div>
}

export default Sidebar