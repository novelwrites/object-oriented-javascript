//Created this file to try to understand inheritance concepts better - 
//followed online tutorial at https://youtu.be/2c-cK4qxo2A

class Car{

    setName(name){ //argument (name) is given to
        this.name = name //class variable name

    }

    startEngine(){
      
        console.log ("Engine started for "+this.name);

    }

    stopEngine(){
      
        console.log ("Engine stopped for "+this.name);

    }

}

class Toyota extends Car{ //Uses keyword extends to inherit from Car class

    //Toyota is child class and Car is the parent class; Toyota inherits
    //all of the functions/methods/properties from parent: setName, 
    //startEngine, stopEngine 

    topspeed(speed){ //child class can have some of its own methods as well

         console.log ("Top speed for "+this.name+" is "+speed);//this.name is name set in parent class

    }

} 

let myCar = new Toyota();//creating an object named myCar for the 
//Toyota class; myCar is referenced to the object so now we can use
//the object reference of myCar to access the methods and properties
//not just of the same class (Toyota) but also the parent class (Car)
myCar.setName('Camry'); //method from parent class
myCar.startEngine(); //method from parent class
myCar.stopEngine(); //method from parent class
myCar.topspeed(200);//method from parent class
