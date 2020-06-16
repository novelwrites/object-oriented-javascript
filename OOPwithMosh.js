const circle = { // {} = object literal syntax: an object is a collection 
//of key value pairs

radius: 1,
location: { //value can be an object - still a key value pair
x: 1,
y: 1,
},

draw: function() { //value can be a function - still a key value pair
                   //key is draw and the value is a function
    console.log ('draw');
}

};

//circle object has three members: radius, location and draw
//If member is a function we refer to it as a method
//draw is a method; radius and location are properties
//properties hold values while methods define some logic

//Now that we have circle object we can access its members 
//using the dot notation
circle.draw(); //calls the draw method

//If an object has one or more methods - don't want to dyplicate it 
//because if there is a bug in it, it will be a bug in all the objects
//We say it has behavior
//Solution: Use a factor or constructor function:


//factory function 
     function CreateCircle(radius)
       return {
        radius: radius, //if key and value are the same we can remove the value
        draw: function(){
            console.log('draw');
        }
    };
    const circle = createCircle(1); //1 is the radius
     circle.draw();


//Constructor Function
      function Circle(radius) { //Constructors use function names that start 
        // with an uppercase letter

       //instead of returning an object we are going to use the "this" keyword
       //to set the properties of this object. This is basically a reference
       //to the object that is executing this piece of code.
       this.radius = radius; //radius property = radius arguement
       this.draw = function () { //set property (method) draw to a function 
           console.log('draw');
       }
        
      }    
      //Create a new circle

      const another = new Circle(1); //pass 1 as the argument
      //when we use the new operator: it will create an empty object and set 
      //"this" to point to that object (by default "this" points to the global 
      //object)

      //If you are running this code inside of a browser the global object is
      //the window object but we don't want to use global variables because they
      //are everywhere and we don't want to accidentally modify one and create
      //a bug so when we use the "new" operator to call a function, three things
      //happen:
      //1. The new operator will create an empty object
      //2. Then it will set this to point to that object
      //3. Finally it will return that object from the function being executed
      //We don't have an explicit return statement

//If you use this keyword along with new operator, we refer to that function 
//as a constructor function

//Every object on JS has a property called constructor and references the function
//that was used to construct or create that object
//Examples: another.constructor circle.constructor

//Functions are objects in javascript Example: Circle. brings up properties in editor
//In console Circle.name returns "Circle"
//Circle.length returns 1

//Value Types (Primitives): Number, String, Boolean. Symbol, Undefined, Null (totally
//independent of each other)
//Reference Types: Object, Function, Array
//When use an object - object is NOT stored in the variable: it is stored somewhere in memory
//The address of that memory location is stored inside that variable
//When copying x into y, it's the address being copied; both x and y are pointing to the
//same object in memory.
//Conclusion: Primitives are copied by their value; Objects are copied by their reference
//Can add properties on the fly in JS Example:
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = { x: 1 }; //using dot notation - can also use bracket notation
circle['location'] = { x: 1};

delete circle.location; //Dynamically deletes unwanted property

delete circle['location']; //Delete using bracket notation

//Enumerating Properties (iterating over properties in an object using For/In Loop)

const circle = new Circle(10);

for (let key in circle) { //returns both properties and methods (radius and draw)

    //Use bracket notation to get the values of these properties - you can use bracket
    //notation to access a member
    console.log (key, circle[key]); //will log radius 10 and draw is a function 
}
//If want only property and not function (methods) you can use qualifying statement, example:
// if (typeof circle[key] !== 'function')
//console.log (key, circle[key]); and will only return radius

//Another way: gets all keys in an object and stores it as an array
const keys = Object.keys(circle);
console.log(keys);

//If you want to know an object has a certain property - use the in operator:

if ('radius' in circle)
   console.log('Circle has a radius');

   //So to enumurate all of the members of an object you can use a "for in" loop,
   //To get all of the keys in an object use Object.key
   //To check for the existence of a property or a method in an object, use the in operator














