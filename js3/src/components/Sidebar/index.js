import React from 'react';
//import {  NavLink } from 'react-router-dom';
import { Nav, NavLink, NavItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Sidebar = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
    /*--------------------------------------------------------------------------------*/
    const expandLogo = () => {
        document.getElementById("logobg").classList.toggle("expand-logo");
    }
    /*--------------------------------------------------------------------------------*/
    /*Verifies if routeName is the one active (in browser input)                      */
    /*--------------------------------------------------------------------------------*/

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    return (
        <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
            <div className="scroll-sidebar">
                <PerfectScrollbar className="sidebar-nav">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Sidebar Menus will go here                                                */}
                    {/*--------------------------------------------------------------------------------*/}

                    <Nav id="sidebarnav" vertical className="list-unstyled pb-3">
                        
                        <NavItem>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                            <NavLink>Teste</NavLink>
                        </NavItem>
                    </Nav>
                </PerfectScrollbar>
            </div>
        </aside>
    );
}
export default Sidebar;
