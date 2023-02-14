import React, {Component} from "react";
import { MdAddShoppingCart } from 'react-icons/md'

import api from '../../services/api'

import { ProductList } from './styles'

export default class Home extends Component {
    state = {
        products:[],
    }

    async componentDidMount(){
        const response = await api.get('produto')
        this.setState({products: response.data})
    }
    
    render() {
        const { products } = this.state;
        return (
            <ProductList>
                {products.map(products => (
                    <li key={products.id}>
                        <img src={products.img}
                        alt={products.nome}
                        />
                        <strong>{products.nome}</strong>
                        <span>{products.preco}</span>

                        <button type="button">
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" /> 0
                            </div>
                            <span> Adicionar ao carrinho </span>
                        </button>
                    </li>
                ))}

            </ProductList>
        );
    }
}