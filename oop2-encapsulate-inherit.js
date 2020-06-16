/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the 
    encapsulation concept of "private variables".  Create methods that return 
    the values of these private variables in case other pieces of the code need 
    to access the data of the 4 classes.  Also create methods that allow outside 
    code to "set" new values for the properties on the classes, without directly 
    manipulating the values themselves. 

    //your code here...*/

class Book {
 
    //#title1 = "Alien Neighbors"; //private variable
    //#title2 = "Taking Back Advent: Moving from the Mundane to the Miraculous"; //#private variable
    #author = "Nancy Golden"; //#private variable
    #publisher = "Golden Cross Ranch LLC"; //#private variable
    #genres = "science fiction and devotionals"
   
    constructor () {
        this.#author="Nancy Golden";
        this.#publisher="Golden Cross Ranch LLC";
        this.#genres="science fiction and devotionals";
    }
  
     category () {
        console.log(this.#author + " " + "writes" + " " + this.#genres);
    }
     getAuthor() { //public method
          return this.#author;
     }

     getGenres() { //public method
        return this.#genres;
   }
     
     setGenres (value) {
         this.#genres=value
        console.log(value)
    }

    }
    
        
    const instantofclass1 = new Book();
    instantofclass1.setGenres("historical fiction")
    console.log (instantofclass1.getGenres());
    instantofclass1.category();
    console.log(instantofclass1.category)
    //console.log(this.#author) errors if console.log because private field



class Books {  //Not Private (Set up to make sure I understand 
    //how to code it publicly before trying privately).
 
    //title1 = "Alien Neighbors"; //public variable
    //title2 = "Taking Back Advent: Moving from the Mundane to the Miraculous"; //public variable
    //author = "Nancy Golden"; //public variable
    //publisher = "Golden Cross Ranch LLC"; //public variable
   
    constructor () {
        this.author="Nancy Golden";
        this.publisher="Golden Cross Ranch LLC";
        this.genres="science fiction and devotionals";
    }
  
     category () {
        console.log(this.author + " " + "writes" + " " + this.genres);
    }
    


    }


const instantofclass2 = new Books();
instantofclass2.category();
console.log(instantofclass2.category)




/*2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have
     a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at 
    least 3 different companies that are children of the Umbrella Organization.  
    (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the 
    site.  It is a child class that inherits from the Company class.  Create 3 sites 
    for each company.
    - Employee class. It should have a employee name, job title, and salary properties. 
    Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 
    1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  
    Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...




/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relevant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...