import React from "react";
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

export default function Home() {
    return (
        <ProductList>
            <li>
                <div> img </div>
                <strong>Tenis</strong>
                <span> R$12,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color= "#fff" /> 3
                    </div>
                    <span> Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <div> img </div>
                <strong>Tenis</strong>
                <span> R$12,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color= "#fff" /> 3
                    </div>
                    <span> Adicionar ao carrinho </span>
                </button>
            </li>
            <li>
                <div> img </div>
                <strong>Tenis</strong>
                <span> R$12,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color= "#fff" /> 3
                    </div>
                    <span> Adicionar ao carrinho </span>
                </button>
            </li>
        </ProductList>
    );
}