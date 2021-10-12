/**
 * Declarations
 */
let btnValidate = document.querySelector("#btnValidate");
let mera = document.querySelector("#mera");
let minas = document.querySelector("#minas");
let etos = document.querySelector("#etos");
let showAge = document.querySelector("#output");

btnValidate.addEventListener("click",validate);
mera.addEventListener('change',dayValidation);
minas.addEventListener('change',monthValiation);
etos.addEventListener('change',yearValidation);

function dayValidation(evt) {
  console.log('The day is '+evt.target.value+', and is type of '+typeof Number(evt.target.value));
}

function monthValiation(evt) {
  console.log('The month is '+evt.target.value+', and is type of '+typeof Number(evt.target.value));
}

function yearValidation(evt) {
  console.log('The year is '+evt.target.value+', and is type of '+typeof Number(evt.target.value));
  /**
   * pinax = [1924,1928,...,2000,2004,2008,2012,2016,2020]
   * pinax.includes(2008)
   */
}


  /*Validate function.
  @Parameter: event */
function validate(evt) {

    //Is needed
    evt.preventDefault();

    //Take the values
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
