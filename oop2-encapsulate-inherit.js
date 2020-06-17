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
 
    //Note: I used author and genres for my book properties when creating methods
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

    setAuthor (value2) {
    this.#author=value2
    console.log(value2)
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
        instantofclass1.setAuthor("J.K. Rowling")
        console.log (instantofclass1.getAuthor());
        instantofclass1.category();
        console.log(instantofclass1.category)
        //console.log(this.#author) errors if console.log because private field

 class Author {
 
    #name = "Nancy Golden"; //#private variable
    #books = "Alien Neighbors and Taking Back Advent: Moving from the Mundane to the Miraculous"; //private variable
   
    constructor () {
        this.#name="Nancy Golden";
        this.#books="Alien Neighbors and Taking Back Advent: Moving from the Mundane to the Miraculous";
    }
  
     category () {
        console.log(this.#books + " " + "is written by" + " " + this.#name);
    }
    getName() { //public method
        return this.#name;
   }

   setName (value2) {
      this.#name=value2
     console.log(value2)
 }
     getBooks() { //public method
        return this.#books;
   }
     
     setBooks (value) {
         this.#books=value
        console.log(value)
    }

    }
    
        
    const instantofclass3 = new Author();
        instantofclass3.setBooks("One Night in Sixes")
        console.log (instantofclass3.getBooks());
        instantofclass3.setName("Tex Thompson")
        console.log (instantofclass3.getName());
        instantofclass3.category();
        console.log(instantofclass3.category)
        //console.log(this.#author) errors if console.log because private field
        
        
        class Publisher {
 
            #authors = "Nancy Golden, Tex Thompson, Jennifer Crippen, J.K. Rowling"; //#private variable
            #booktitles = "Alien Neighbors, Taking Back Advent: Moving from the Mundane to the Miraculous, One Night in Sixes, Ellie's World, The Philosopher's Secrets"; //private variable
           
            constructor () {
                this.#authors="Nancy Golden, Tex Thompson, Jennifer Crippen, J.K. Rowling";
                this.#booktitles="Alien Neighbors, Taking Back Advent: Moving from the Mundane to the Miraculous, One Night in Sixes, Ellie's World, The Philosopher's Secrets";
            }
          
            category () {
                console.log(this.#booktitles + " " + "are written by" + " " + this.#authors);
            }
            getAuthors() { //public method
                return this.#authors;
           }
        
           setAuthors (value2) {
              this.#authors=value2
             console.log(value2)
         }
             getBooktitles() { //public method
                return this.#booktitles;
           }
             
             setBooktitles (value) {
                 this.#booktitles=value
                console.log(value)
            }
        
            }
            
                
            const instantofclass4 = new Publisher();
                instantofclass4.setBooktitles("War and Peace, Little Women, You Don't Know JS Yet")
                console.log (instantofclass4.getBooktitles());
                instantofclass4.setAuthors("Leo Tolstoy, Laura Wilder, Kyle Simpson")
                console.log (instantofclass4.getAuthors());
                instantofclass4.category();
                console.log(instantofclass4.category)
                //console.log(this.#author) errors if console.log because private field
                

                class Review {
 
                    #rating = ["1 star","2 star","3 star","4 star","5 star"]; //#private variable
                    #user = ["John", "Sabitha", "Vimala", "Victor", "Sarah"]; //private variable
                   
                    constructor () {
                        this.#rating=["1 star","2 star","3 star","4 star","5 star"];
                        this.#user=["John", "Sabitha", "Vimala", "Victor", "Sarah"];
                    }
                  
                    category () {
                        console.log(this.#rating[2] + " " + "was written by" + " " + this.#user[1]);
                        //it's bringing back index value - not sure how to access array value with this keyword
                    }
                    getRating() { //public method
                        return this.#rating;
                   }
                
                   setRating (value2) {
                      this.#rating=value2
                     console.log(value2)
                 }
                     getUser() { //public method
                        return this.#user;
                   }
                     
                     setUser (value) {
                         this.#user=value
                        console.log(value)
                    }
                
                    }
                    
                        
                    const instantofclass5 = new Review();
                        instantofclass5.setRating([3])
                        console.log (instantofclass5.getRating());
                        instantofclass5.setUser([4])
                        console.log (instantofclass5.getUser());
                        instantofclass5.category();
                        console.log(instantofclass5.category)
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



    //your code here...*/

class Umbrella { //Parent Organization
   

    constructor(organization, location) {
        this.organization = "Golden Cross Ranch LLC";
        this.location = "Dallas, TX";
        return;

    }
    parentinfo () {
        console.log(this.organization +  this.location);
    }
    
}
//console.log(parentinfo) //Not sure whty console.log not working but need to keep going

class Company extends Umbrella { //child of umbrella 

constructor (name, employees, industry, yearlyrevenue) {

    this.name = name;
    this.employees = employees;
    this.industry = industry;
    this.yearlyrevenue = yearlyrevenue;
           
}
action1(){
console.log(this.name + "has" + this.employees + "employees and is a subsidiary of" +this.organization);
}

action2(){
console.log(this.name + "is in the" + this.industry + "industry");
}

}

const UniversalPowerGroup = new Company("Universal Power Group", 75, "battery distributor", "100 million");
const OptekTechnology = new Company("Optek Technology", 357, "semiconductor", "357 million");
const Tandy = new Company("Tandy", 1542, "leatherworks", "457 thousand");

    
console.log (UniversalPowerGroup);
console.log (OptekTechnology);
console.log (Tandy);

UniversalPowerGroup.action1()
Tandy.action2()

//I would have liked to continue but it is getting very late - I gave it a good try and 
//will return to these concepts when I have more time.

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relevant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...