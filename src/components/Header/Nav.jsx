import React from 'react'
import Navegation from './styledNav'

const Nav = () => {
  return (
    <Navegation>

        <ul>
            <li>
              <a href="">
                <i className="fa-solid fa-house"></i>
                Home
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa-solid fa-dolly"></i>
                Estoque
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-money-bill-transfer"></i>
                Venda
              </a>
            </li>
            <li>
              <a href="">
              <i className="fa-solid fa-chart-line"></i>
                Financeiro
              </a>
            </li>
        </ul>
      
    </Navegation>
  )
}

export default Nav
