  const buttons = document.querySelectorAll('button');
  const newNumber = document.querySelector('.newNumber');
  const a = '123456';  

  buttons.forEach((button => {
    button.addEventListener(
      'click', () => {
        newNumber.innerHTML += button.innerText;
      }
    )
  }))