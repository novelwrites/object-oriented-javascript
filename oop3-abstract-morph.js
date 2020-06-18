
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated.
//Find a way to prevent this class from being instantiated with an instance.  
//In the Creature class, include two abstract methods.  move(), and act().  
//These methods are NOT allowed to be invoked from the Abstract class, so 
throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the 
abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.
Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

    class Creature { //Abstract

        constructor() {
            if(this.constructor == Creature) {
                throw new Error("Unable to instantiate Abstract Class Creature");
            }
        }
        
        move(){
            //console.log ("Move is a good thing to do - don't forget to get up and stretch");
            //Don't want to do above line because you don't invoke functions outside
            //of abstract method even though inheritance allows you to.
            //Instead - do throw new Error
             
            throw new Error("This is an abstract method - Don't even think about invoking it!");
        };
    
        act(){
          
            throw new Error("This is an abstract method - Don't make me have to call the code police!");
        };

    }

    //const creature = new Creature(); //Code to test and introduce error

    //console.log(creature); //Errors out which shows cannot be instantiated

    //Conclusion: Creature is an abstract class so I can't instantiate it
    //but I can still inherit from it. To prevent that you have to throw new Error.
    
    class Human extends Creature { //Used Human Class to illustrate 
        //can't invoke methods from Abstract Parent Creatures

    }

    //const mortal = new Human();

    //mortal.move(); introduces error to show methods can't be invoked from Abstract Creature Class
    //mortal.act();
//WE ARE IMPLEMENTING THE CONCEPT OF MOVE AND ACT IN THE ABSTRACT
//IN THE CHILD
    class Bird extends Creature{ //Uses keyword extends to inherit from Creature class

        

        //Bird is child class and Creature is the parent class; Bird inherits
        //all of the functions/methods/properties from parent but it can't invoke methods because 
        //the Creature Class is an Abstraction so create the methods in the subclass itself:
        
        move(){
            console.log ("Birds move by flying");
    
        }
        act(){
            console.log ("Birds act aggressively when protecting their young");
    
        }
        sing(){
            console.log ("Birds often sing in the early morning hours");
    
        }
    
    } 
    
    const avian = new Bird();

    avian.move();
    avian.act();
    avian.sing();

    class Fish extends Creature{ //Uses keyword extends to inherit from Creature class

        //Fish is child class and Creature is the parent class; Fish inherits
        //all of the functions/methods/properties from parent but it can't invoke methods because 
        //the Creature Class is an Abstraction so create the methods in the subclass itself:
        
        move(){
            console.log ("Fish move by swimming");
    
        }
        act(){
            console.log ("Fish act very excited at feeding time");
    
        }
        hide(){
            console.log ("Fish often hide when bigger fish are near");
    
        }
    
    } 
    
    const watercreature = new Fish();

    watercreature.move();
    watercreature.act();
    watercreature.hide();

    class Dinosaur extends Creature{ 

        
        //constructor () {
            //this.name="Fred";
            //this.food="cheerios";
        
        
        move(){
            console.log ("Dinosaurs named" + this.name + "move by chasing their prey");
    
        }
        act(){
            console.log ("Dinosaurs act very excited when watching Jurassic Park");
    
        }
        roar(){
            console.log ("Dinosaurs roar when they are hungry");
    
        }
    } 
    
    const dino = new Dinosaur();

    dino.move();
    dino.act();
    dino.roar();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you 
to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep = () => {
        console.log(this.name + " is sleeping");
    }

    code = function() {
        console.log(this.name + " is coding");
    }

    repeat = function() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("this explain method should contain explain what you had to do to get the correct functions to work, and the reasoning behind what you did.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //eat method should print out - <stduent name> studies, then eats

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare = function() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");

cook.explain();

