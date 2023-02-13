import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles';

function Header() {
    return (
        <Container>
            <Link to="/">
                <div>Logo</div>
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>

    );

}

export default Header;