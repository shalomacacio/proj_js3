import React from 'react';
import {
    Navbar,
    NavbarBrand,

} from 'reactstrap';
import './style.css';


/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logolighttext from './images/logo3.png';


const Header = () => {

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    /*--------------------------------------------------------------------------------*/
    /*To open Search Bar                                                              */
    /*--------------------------------------------------------------------------------*/
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle('show-search');
    }


    return (
        <header className="topbar navbarbg">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" >
                    <NavbarBrand href="/">
                        <span className="logo-text">
                            <img src={logolighttext} className="light-logo" alt="homepage" />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button className="btn-link nav-toggler d-block d-md-none text-white" onClick={() => showMobilemenu()} >
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                
            </Navbar>
        </header>
    );
}
export default Header;
