import React from 'react';
import { AvatarImg, HeaderContainer,  HorizontalContainer, LogoImg, MenuCheck, MenuItem, MenuLbl, MenuLi, MenuUl, MenuLink, VerticalContainer} from './HeaderElements'
import logo from '../../assets/images/logo-white.png';
import avatar from '../../assets/images/user.jpg'


const Header = () => {
  return (
    <HeaderContainer>
        <VerticalContainer>
            <MenuItem>
                <MenuCheck type={'checkbox'} id='check1'/> 
                <MenuLbl htmlFor='check1' >Menu</MenuLbl>
                <MenuUl>
                    <MenuLi><MenuLink to="/sla-garantia">Operacional</MenuLink> </MenuLi>
                    <MenuLi><MenuLink to="/">Financeiro</MenuLink> </MenuLi>
                    <MenuLi><MenuLink to="/">Estoque</MenuLink> </MenuLi>
                    <MenuLi><MenuLink to="/">Relatórios</MenuLink> </MenuLi>
                </MenuUl>
            </MenuItem>
        </VerticalContainer>

        <MenuLink to="/"><LogoImg src={logo}  alt='logo'/> </MenuLink> 
     
        <HorizontalContainer>
            <span>Fulano</span>
            <AvatarImg src={avatar} alt='avatar' />
        </HorizontalContainer>
    </HeaderContainer>
  );   
};

export default Header;
