import React from 'react'
import Metric from './styledMetrics'


const Metrics = () => {
  return (
    <Metric>
      
        <fieldset>
            <legend>Informações Gerais</legend>
            
            <div className='containerMetrics'>
                <h3>Totais de Itens</h3>
                <div className='info-containerMetrics'>
                  <p className='info'>0</p>
                  <i className="fa-solid fa-boxes-stacked"></i>
                </div>
                
            </div>

              <div className='containerMetrics'>
                <h3>Valor Total</h3>
                <div className='info-containerMetrics'>
                  <p className='info'>R$: 0,00</p>
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
            </div>

            <div className='containerMetrics'>
                <h3>Entrada</h3>
                <div className='info-containerMetrics'>
                  <p className='info'>0</p>
                  <i className="fa-solid fa-arrow-turn-up"></i>
                </div>
            </div> 

            <div className='containerMetrics'>
                <h3>Saída</h3>
                <div className='info-containerMetrics'>
                  <p className='info'>0</p>
                  <i className="fa-solid fa-arrow-turn-down"></i>
                </div>
            </div>                        

        </fieldset>
      
    </Metric>
  )
}

export default Metrics
