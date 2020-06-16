//1. Create a Class called WhyClass.  This class should have one property, 
//and two methods.  THe property is called "purpose", and stores a string.  
//This string should clearly explain why classes are used in Object Oriented 
//Programming.  The first method is called explain().  This method should 
//print the contents stored in the purpose 'field' of the class.  The second 
//method is called pieces().  This 2nd method should print out the various 
//parts that are essential to building a class.  Instantiate the class, and 
//invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
  constructor () {
  
  this.purpose="blahblahblah";

 }

 explain(){
    console.log(this.purpose);
}

pieces(){
    console.log("essential parts for building a class are...");
}

}

const instantofclass = new WhyClass();
instantofclass.explain()
instantofclass.pieces()

/*2. You are exploring the rainforests of the Amazon.  You have observed many 
//different types of wildlife on your excursion.  To jog your memory, some different 
//types of wildlife that you observed are found in the following 
//URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  
//Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall 
//observing the Amazon.  Each creature should have 3 unique characteristics, and 2 
//unique actions that it can do. */


//your code here...

class Amazonwildlife {

    constructor (classification, color, habitat, abilities) {

        this.classification = classification;
        this.color = color;
        this.habitat = habitat;
        this.abilities = abilities;
    

    }
action1(){
    console.log("I can " + this.abilities[0]);
}

action2(){
    console.log("I can " + this.abilities[1]);
}

}

const iguana = new Amazonwildlife("reptile", "green", "forest", ["climb", "camoflauge"]);
const caiman = new Amazonwildlife("reptile", "black", "river", ["swim", "hunt for food"]);
const dolphin = new Amazonwildlife("mammal", "pink", "river", ["swim", "breathe air"]);
const manatee = new Amazonwildlife("mammal", "black or grey", "river", ["swim", "breathe air"]);
const piranha = new Amazonwildlife("fish", "red-bellied", "river", ["swim", "hunt for food"]);
const bulletant = new Amazonwildlife("insect", "black", "forest", ["sting", "hunt fungus"]);
        
console.log (iguana);
console.log (caiman);
console.log (dolphin);
console.log (manatee);
console.log (piranha); 
console.log (bulletant);

iguana.action1()
manatee.action2()



/*3. Convert the following Object Literals into a general class called Shape, and 
//instantiate the class to generate the object literals
*/


class Shape {
    //your code here...

    constructor(name, height, sides,length, width, radius){
        this.name = name;
        this.height = height;
        this.sides = sides;
        this.base = this.sides[0];
        this.length = length;
        this.width = width;
        this.radius = radius;

    }

    calcArea(){
        if (this.sides.length===3){ //looking at length of array in this.sides
            console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);    
        }
        
    }
    
    calcPerimeter(){
        if (this.sides.length===3){ //looking at length of array in this.sides
            console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
        }
    }
}

const triangle2 = new Shape("Triangle", 6.71,[4,7,7], null, null, null)
triangle2.calcArea()
triangle2.calcPerimeter()
const triangle = {
    name : "triangle",
    sides : [4,7,7], //lengths of each side
    base : null,
    height : null, //determine this height using basic geometry.  You may need to research this one.
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate 
//the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
    name : "rectangle",
    sides : 4,
    length : 2,
    width : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter : function() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width) }`)
    }
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
    name : "circle",
    sides : 1,
    radius : 5,
    calcArea : function() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius**2).toFixed(2)}`);
    },
    calcCircumference : function() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
circle.calcCircumference();
circle.calcArea();


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  
//Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 
//shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle 
//instead of hard coding it, you will also obtain the bonus for this exercise.  
//The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 
//known earth, we don't want multiple instances of earth.  Modify the class so the properties are 
//usuable WITHOUT instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name,num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth',3);
console.log(earth);




