/**
 * https://devdocs.io/javascript/global_objects/object/hasownproperty
 * object.hasOwnProperty('property');
 * Challenge: Add the own properties of canary to the array ownProps.
 */
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps); // prints [ "name", "numLegs" ]