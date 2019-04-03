/**
 * https://devdocs.io/javascript/operators/instanceof
 * instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
 * If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor.
 * Challenge: Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
 */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Add your code below this line
  let myHouse = new House(2);
  myHouse instanceof House;
  