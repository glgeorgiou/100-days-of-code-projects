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

    //Is needed
    evt.preventDefault();

    //Take the values
    let mera = document.querySelector("#mera").selectedIndex;
    let minas = document.querySelector("#minas").selectedIndex;
    let etos = document.querySelector("#etos");
    let etosValue = etos.options[etos.selectedIndex].text;
    let showAge = document.querySelector("#output");
    let age='';   

    date = etosValue+"-"+minas+"-"+mera;

    //Calculate and show age
    age = calculateAge(date);

    if (age != 'NaN') {
      showAge.value = age;
    } else {
      showAge.value = 'Sorry, invalid age';
    }

    //TMP
    console.log('The date is: '+date+' - Your age is '+age+'.');
}
