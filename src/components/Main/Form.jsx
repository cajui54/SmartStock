import React, {useState, useEffect} from 'react'
import Forms from './styledForm'
import {checkFields, clearFields} from './fieldValidation'

const Form = ({items}) => {
  const url = 'http://localhost:3000/setting';
  const [datasInputs, setDatasInputs] = useState(null);

  const getInputs = () => document.querySelectorAll('form [name]');

  const convertObject = (inputs) => {
    let data = {};

    inputs.forEach(element => {
      data[element.name] = element.value;
    })
    return data;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = getInputs();

    if(checkFields(input)) {
      let dataInputsObj = convertObject(input);
      setDatasInputs(dataInputsObj);
      clearFields(input);
    } else {
      alert('Ocorreu um erro inesperado!');
    }
  }
  
  useEffect(() => {

    const requestPost = async () => {
      
      if(datasInputs !== null) {
        console.log("body", JSON.stringify(datasInputs));
        const response = await fetch(url, {
          method: "POST",
          header: {"Content-Type": "application/json"},
          body: JSON.stringify(datasInputs),
        })
        
        setDatasInputs(null);
      }
      
    }
    requestPost();
  },[datasInputs])

  const handleInput = (event) => event.target.classList.remove('error');
  
  
  return (
    <Forms className='open' onSubmit={handleSubmit}>
      <div className='container-logo'>
        <i className="fa-solid fa-champagne-glasses"></i>
        <p>Drinks</p>
      </div>

      <fieldset>
        <legend>Cadastrar Produto</legend>

        <label>
          <span>Descrição</span>
          <input type="text" name='description' onClick={handleInput}/>
        </label>

        <label>
          <span>Fornecedor</span>
          <input type="text" name='brand' onClick={handleInput}/>
        </label>

        <label>
          
          <span>Categoria</span>
          <select name="type" id="slc-types" onClick={handleInput}>
            <option value=''>Selecione</option>
            {
              items && items.category.map((item, index) => {
                return <option key={index}>{item}</option>
              })
            }
          </select>
        </label>

        <label>
          <span>Preço</span>
          <input type="number" name='price' min='0'  onClick={handleInput}/>
        </label>

        <label>
          <span>Quantidade</span>
          <input type="number" name='amount' min='0' onClick={handleInput}/>
        </label>

        <div className='container-btns'>
          <button id='btnSave'>Cadastrar</button>
          <button type="reset" onClick={() => clearFields(getInputs())}>Limpar</button>
        </div>

      </fieldset>
      
    </Forms>
  )
}

export default Form
