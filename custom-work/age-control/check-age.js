let btnValidate = document.querySelector("#btnValidate");
btnValidate.addEventListener("click",validate)


  /*Validate function.
  @Parameter: event */
function validate(evt) {

    //Is needed
    evt.preventDefault();

    //Take the values
    let mera = document.querySelector("#mera");
    let minas = document.querySelector("#minas");
    let etos = document.querySelector("#etos");
    let showAge = document.querySelector("#output");
    let nMera = mera.value;
    let nMinas = minas.value;
    let nEtos = Number(etos.value);
    let age='', numEtos = '';   

    //Calculate age
    etosTmp = new Date()
    numEtos = Number(etosTmp.getFullYear())
    age =  numEtos-nEtos;

    //Check age
    if (nMera =='0' || nMinas=='0' || nEtos==0) {
      btnValidate.innerText = 'One or more zero values. Try again'
      btnValidate.removeAttribute("style");
      showAge.value = '';
    } else {
      if (age <= 21) {
        /**
         * More validatations:
         * 1. dis year
         * 2. valid end date accordng to month
         * 3. compare also month and date in age in order to control < 21 years old
         */
        btnValidate.innerText = 'Sorry, you \'re less than 21.'
        showAge.value = age;
        btnValidate.setAttribute("style","background-color: red")
      } else {
        showAge.value = age;
        btnValidate.innerText = 'Acceptable age'
        btnValidate.setAttribute("style","background-color: green")
      }
    }
}

/**
 * TEMP
 * mera.addEventListener('change', (evt) => {
console.log('The day is '+evt.target.value+', and is type of '+typeof Number(evt.target.value));
});
 */