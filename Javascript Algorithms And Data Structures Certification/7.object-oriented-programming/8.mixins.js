/**
 * Use a Mixin to Add Common Behavior Between Unrelated Objects.
 * Instead of inheritance.
 * Challenge: Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
 */
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  // Set a function with a method
  let glideMixin = function(obj) {
      obj.glide = function() {
          console.log("I'm gliding");
      }
  }
  
  //Assign each object with 'glide' method.
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();
  boat.glide();