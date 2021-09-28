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
    let mera = document.querySelector("#mera").value
    let minas = document.querySelector("#minas").value
    let etos = document.querySelector("#etos").value

    //Check the age
    let date = etos+"-"+minas+"-"+mera;
    let age = calculateAge(date);

    if (age=='NaN') {
        mera.value=="";
        minas.value=="";
        etos.value=="";
        console.log('Not a valid age'+age);
    }
    console.log('Your age is '+age);
    
//    console.log("Day = "+mera+", Month="+minas+", Year = "+etos)
}
