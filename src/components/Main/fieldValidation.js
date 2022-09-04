const clearFields = (inputs) => {
    inputs.forEach(element => {
        element.value = '';
        element.classList.remove('error');
    })
}

const checkFields = (_inputs) =>  {
    let msg = '';
    [..._inputs].forEach(element => {
      if(!element.value) {
        msg += 'Por Favor, preencha todos os campos! \n';
        element.focus();
        element.classList.add('error');
      }
    });
    if(msg) {
      alert(msg);
      return false;
    }
    return true;
}


export  {checkFields, clearFields};