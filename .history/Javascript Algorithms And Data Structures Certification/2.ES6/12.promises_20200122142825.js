/**
 * Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. 
 */

/**
 * Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
 */
const makeServerRequest = new Promise((resolve, reject) => {});



/**
 * Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
 */
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // change this line
      resolve("We got the data");
    } else {  
      // change this line
      reject("Data not received");
    }
  });




