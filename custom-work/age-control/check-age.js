let btnValidate = document.querySelector("#btnValidate");
btnValidate.addEventListener("click",validate)

/*Calculation function.
@parameter: date dd-mm-yyyy
@Return: an integer number*/
function calculateAge(dob) {
    const ageInMillisecongs = Date.now() - new Date(dob);
    return Math.floor(ageInMillisecongs / (1000 * 60 * 60 * 24 * 365.25));
  }


  /*Validate function.
  @Parameter: event */
function validate(evt) {

    //Temporary evt
    evt.preventDefault();

    //Take the values
    let mera = document.querySelector("#mera").selectedIndex;
    let minas = document.querySelector("#minas").selectedIndex;
    let etos = document.querySelector("#etos");
    let etosValue = etos.options[etos.selectedIndex].text;
    let showAge = document.querySelector("#output");

    //Check the age - DEBUG THE BELOW IFs
    if (mera.selectedIndex===0) {mera='-';}
    if (minas.selectedIndex===0) {minas='-';}

    let date = etosValue+"-"+minas+"-"+mera;
    let age = calculateAge(date);

    // if (age=='NaN') {
    //     mera.value=="";
    //     minas.value=="";
    //     etos.value=="";
    //     console.log('Not a valid age'+age);
    // }

    console.log('The date is: '+date+' - Your age is '+age+'.');
    showAge.value = age;
}
