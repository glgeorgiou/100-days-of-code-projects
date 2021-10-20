/**
 * Declarations
 */
let btnValidate = document.querySelector("#btnValidate");
let mera = document.querySelector("#mera");
let minas = document.querySelector("#minas");
let etos = document.querySelector("#etos");
let showAge = document.querySelector("#output");
let yFlag //Dis year flag;
let mFlag //month flag
let dFlag //day flag


btnValidate.addEventListener("click",validate);
etos.addEventListener('change',yearValidation);


/**
 * Validates if a year is dis or not
 * @param {*} evt 
 */
function yearValidation(evt) {
  let pinax = [];

  for (let i = 0, fEtos=1924; i <=22; i++, fEtos+=4) {
    pinax[i]=fEtos;
  }
  
  if (pinax.includes(Number(evt.target.value))) {
      yFlag=1;  
    } else {
      yFlag=0;  
  }
}



  /*Validate function.
  @Parameter: event */
function validate(evt) {
  let oddMonthDays = [1,3,5,7,8,10,12];
  let outputMessage='';

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
      outputMessage = 'One or more zero values. Try again'
      btnValidate.innerText = outputMessage;
      btnValidate.removeAttribute("style");
      showAge.value = '';
    } else {
      if (age <= 21) {
        btnValidate.innerText = 'Sorry, you \'re less than 21.'
        showAge.value = age;
        btnValidate.setAttribute("style","background-color: red")
      } else {
        showAge.value = age;
        btnValidate.innerText = 'Acceptable age'
        btnValidate.setAttribute("style","background-color: green")
      }
    }
    
    //Check Months and Days combination if is right or not
    if ( oddMonthDays.includes((Number(nMinas))) ) {
      mFlag=1;
    } else {
      mFlag=0;
    }
    
    if ( Number(nMera==31)) {dFlag=1;} else {dFlag=0;} //Is is usefull?
    
    if ( (!mFlag && nMera==31) || (nMera==29 && !yFlag) || (nMera<=28 && nMinas)) {
    }
    
    if (nMinas==2) {
      if (nMera>28 && !yFlag) {
        outputMessage += 'Wrong combination 1. Try again';
        btnValidate.setAttribute("style","background-color: red")
        btnValidate.innerText = outputMessage;
      }
      if (nMera>29 && yFlag) {
        outputMessage += 'Wrong combination 2. Try again';
        btnValidate.setAttribute("style","background-color: red")
        btnValidate.innerText = outputMessage;
      }
    }
}