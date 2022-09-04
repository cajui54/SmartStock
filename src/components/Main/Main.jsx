import React from 'react'
import Mains from './styledMain'
import Table from './Table'
import Form from './Form'
import useFetch from '../../hooks/useFetch'

const Main = () => {
  const url = 'http://localhost:3000/setting';

  const {data: items} = useFetch(url);

  let openForm = true;
  const handleShow = () => {
    let $form = document.querySelector('form');

    if(!openForm){
      $form.classList.add('open')
      openForm = true;
    } 
    else {
      $form.classList.remove('open');
      openForm = false;
    }
    
  }

  return (
    <Mains>
      <fieldset>
        <legend>Produtos em Estoque</legend>
        <Table items={items}/>
        <div className='menuForm'>
          <button onClick={handleShow}>
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
        <Form items={items}/>
      </fieldset>
    </Mains>
  )
}

export default Main
