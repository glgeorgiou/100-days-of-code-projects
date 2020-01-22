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




/**
 * Add the then method to your promise. Use result as the parameter of its callback function and log result to the console. result comes from the argument given to the resolve method.
 */
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });



/**
 * catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. 
 * * */  
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  
  makeServerRequest.catch((error) => {
    console.log(error);
  });