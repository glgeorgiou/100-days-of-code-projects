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
    let age='', ageTmp = '';   

    
    //Calculate age
    etosTmp = new Date()
    numEtos = Number(etosTmp.getFullYear())
    age =  numEtos-nEtos;

    //Check age
  if (age <= 21) {
    showAge.value = 'Sorry, you \'re less than 21.'
  } else {
    showAge.value = age;
  }
    //NOTE: change color and text of the button in any case
}