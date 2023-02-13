import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th/>
                    <th>Produto</th>
                    <th>QTD</th>
                    <th>SubTotal</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div> img</div>
                    </td>
                    <td>
                        <strong>Tenis</strong>
                        <span>R$129,80</span>
                    </td>
                    <td>
                        <div>
                            <button type='button'>
                                <MdRemoveCircleOutline size={20} color="#213233" />
                            </button>
                            <input type="number" readOnly value={1}/>
                            <button type='button'>
                                <MdAddCircleOutline size={20} color="#213233" />
                            </button>
                        </div>
                    </td>
                    <td>
                        <strong>R$122,33</strong>
                    </td>
                    <td>
                        <button type='button'>
                            <MdDelete size={20} color="#fff"/>
                        </button>
                    </td>
                </tr>
                
            </tbody>

        </ProductTable>
        <footer>
            <button type='button'>Finalizar pedido</button>
            <Total>
                <span>Total</span>
                <strong> R$1902,90</strong>
            </Total>
        </footer>
    </Container>
  );
}

export default Cart;