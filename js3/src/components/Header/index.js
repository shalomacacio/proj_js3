import React from 'react';
import { AvatarImg, HeaderContainer,  HorizontalContainer, LogoImg, MenuCheck, MenuItem, MenuLbl, MenuLi, MenuUl , VerticalContainer} from './HeaderElements'
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
                    <MenuLi>Operacional </MenuLi>
                    <MenuLi>Financeiro </MenuLi>
                    <MenuLi>Estoque </MenuLi>
                    <MenuLi>Relatórios </MenuLi>
                </MenuUl>
            </MenuItem>
        </VerticalContainer>

        <LogoImg src={logo}  alt='logo'/> 
     
        <HorizontalContainer>
            <span>Fulano</span>
            <AvatarImg src={avatar} alt='avatar' />
        </HorizontalContainer>
          
    </HeaderContainer>
  );   
};

export default Header;
