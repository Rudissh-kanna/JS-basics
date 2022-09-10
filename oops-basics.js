/**
 * In javascript almost everything is an object except the primitive data types
 * the methods of primitive datatypes for eg: str.toUpperCase() are executed because javascript on the backend adds a wrapper object to the primitive data type to perform methods on it
 */

/**
 * Object literals:
 * Declaration -> const book1 = {
    title: "Book one",
    author: "John Doe",
    year: '2013',
    getSummary: function() {
        return `${this.title was written by ${this.author} in ${this.year}`;
    }
}
 * Accessing object literals can be done by  using book1.title
 * Here this refers to that particular object
 * Object.values(obj) will return the array of values of the obj being passed in the argument
 * Object.keys(obj) will return the array of keys of the obj being passed in the argument
 */

/**
 * Constructor : 
 * To avoid using multiple object literal declaration we use a constructor function
 * The constructor is a plain javascript function
 * function Booktitle, author, year) {
 *      this.title = title;
 *      this.author = author;
 *      this.year = year;
 *      this.getSummary = function() {
        return `${this.title was written by ${this.author} in ${this.year}`;
    }
 * }
 * we can create instances of the constructor using the "new" keyword
 * const book1 = new Book("Book One", "John Doe", "2013");
 */

/**
 * Prototyping: 
 * Prototyping is a process by which we embed methods into the constructor function which can be accessed by all of its instances unanimously without holding a place in the constructor itself
 * Book.prototype.getSummary = function() {
        return `${this.title was written by ${this.author} in ${this.year}`;
 * Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`;
 }
 */

/**
 * Inheritance in prototype:
 * Magazine constructor
 * function Magazine(title, author, year, month) {
 *  Book.call(this, title, author, year);
 *  
 *  this.month = month;
 * }
 * To inherit prototype methods we use
 * Magazine.prototype = Object.create(Book.prototype)
 * Instaniate the Magazine object
 * const mag1 = new Magazine('Mog One', "John Doe", "2018", "Jan")
 */

/**
 * Object Create:
 * Object of Protos;
 * const bookProtos = {
 *      getSummary: function() {
 *       return `${this.title was written   by      ${this.author} in ${this.year}`;
 * }
 * }
 * Create Object
 * const book1 = Object.create(bookProtos);
 */

/**
 * Classes:
 * class Book {
 *  constructor(title,author,year) {
 *      this.title = title;
 *      this.author = author;
 *      this.year = year;
 * }
 * 
 *  getSummary() {
 *           return `${this.title was       written by ${this.author} in ${this.year}`;
 * }
 *  static topBookStore() {
 *      return "Barnes & Nobles"
 * }
 * }
 * Instantiate Object:
 * const book1 = new Book("Book One", "John Doe", "2013")
 * Static Mehtods:
 *      Static methods can be used without instantiating the object it is binded to the class itself
 */

/**
 * Subclasses: 
 * Magazine Subclass: 
 * class Magazine extends Book {
 *      constructor(title, author, year, month ) {
 *      super(title, author, year);
 *      this.month = month;
 * }
 * }
 * 
 * Instantiate Magazine 
 * const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan" );
 */