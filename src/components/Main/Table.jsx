import React from 'react'
import Tables from './styledTable'
import useFetch from '../../hooks/useFetch'

const Table = ({items}) => {
    const sumTotal = (price, amount) => parseFloat(price) * parseFloat(amount);
  return (
    <Tables>
        <table>
            <caption>Tabela de Produtos</caption>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Produto</th>
                    <th>Fornecedor</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tfoot>
                <tr>
                    <td colSpan="8">Tabela sujeito há reajuste</td>
                </tr>
            </tfoot>

               
            <tbody>
                {
                  items && items.products.map((products, index) => {
                    return (
                    <tr key={index}>
                        <td>{products.id}</td>
                        <td>{products.item}</td>
                        <td>{products.brand}</td>
                        <td>{products.type}</td>
                        <td>{products.price}</td>
                        <td>{products.amount}</td>
                        <td>R$: {sumTotal(products.price, products.amount).toFixed(2)}</td>
                        <td>
                            <button><i className="fa-solid fa-pen-to-square"></i></button>
                            <button><i className="fa-solid fa-trash-can"></i></button>
                        </td>
                     </tr>
                    )
                  }) 
                }

            
            </tbody>

        </table>
      
    </Tables>
  )
}

export default Table
