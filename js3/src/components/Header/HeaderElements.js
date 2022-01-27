import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    background: #5A8DEE;
    color: #fff;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HorizontalContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const VerticalContainer = styled.div`
    display:inline-block;
    align-items: center;
`;

export const AvatarImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 15px;
    border-radius: 1.5rem;
`;

export const LogoImg = styled.img`
    width: 150px;
    max-width: 160px;
`;

export const MenuLbl = styled.label`
    display: block;
    padding: 10px;
    background: #89aae9;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    border-bottom: 2px solid #aaa;
    text-align: center;
    
    &:hover {
        background: #5a8dee;
    }

`
export const MenuCheck = styled.input`
    display: none;
`
export const MenuUl = styled.ul`
    width: 100%;
    position: absolute;
    list-style: none;
    overflow: hidden;
    max-height: 0;
    transition: 0.5s;

`
export const MenuLi = styled.li`
    width: 300px;
    padding: 15px;
    display: block;
    list-style: none;
    background: #fafafa;
    color: #333;
    border-bottom: 2px solid #f3f3f3;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: #5a8dee;
        color: #fff;
    }
`
export const MenuItem = styled.nav`
    width: 300px;
    font-family: Arial, Helvetica, sans-serif;

    ${MenuCheck}:checked ~ ${MenuUl} {
        height: auto;
        max-height: 200px;
    }
`
export const MenuLink = styled(Link)`
    text-decoration: none;
`;