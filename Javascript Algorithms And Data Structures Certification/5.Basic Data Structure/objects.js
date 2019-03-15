/***
 * Define object properties.
 * Challenge: Add three more entries: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
 */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // change code below this line
  foods.bananas=13;
  foods.grapes=35;
  foods.strawberries=27;
  // change code above this line
  
  console.log(foods);


  /**
   * Braket notation.
   * Challenge: Set the value of the online key to 45.
   */
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data['online']=45;
  // change code above this line
  
  console.log(userActivity);

  /**
   * Check variable using bracket notation: 
   */
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
  }
  
  // change code below this line to test different cases:
  console.log(checkInventory("apples"));



  /**
   * Using Delete keyword to delete object's properties.
   * https://devdocs.io/javascript/operators/delete
   */
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // change code below this line
    delete foods.oranges;
    delete foods.plums;
    delete foods['strawberries'];
  // change code above this line
  
  console.log(foods);



  /**
   * Checking if an object has property = hasOwnProperty / 'propertyName' in 'object'.
   * https://devdocs.io/javascript/global_objects/object/hasownproperty
   * Challenge: Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
   */
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // change code below this line
   if (obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') && 'Sarah' in obj && 'Ryan' in obj){
     return true;
   }
   return false
    // change code above this line
  }
  
  console.log(isEveryoneHere(users));



  /**
   * Using for..in loop.
   * Challenge:  use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.
   */
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
      var count = 0;
      
      for (let user in obj) {
        if(obj[user]['online'] === true){
        count++;
        };
      };
      return count;
    // change code above this line
  }
  
  console.log(countOnline(users));



  /**
   * Generate an Array of All Object Keys with Object.keys().
   * Challenge: Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
   */
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // change code below this line
    let arr=[];
  
    for (let user in obj) {
      arr.push(user);
    }
    return arr;
    // change code above this line
  }
  
  console.log(getArrayOfUsers(users));



  /**
   * Basic Data Structures: Modify an Array Stored in an Object.
   * Challenge: Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
   */
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line  
    userObj['data']['friends'].push(friend);
    return userObj['data']['friends'];
    // change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));