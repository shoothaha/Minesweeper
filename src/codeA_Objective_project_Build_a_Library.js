/*
Congratulations, you've passed the grueling rigmarole of librarian school and have become head librarian at your local Books-'N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in "Lib 203 - Shushing: How to Maintain Order While Spitting", you realize you're still using index cards to handle everything.

But no matter, you know some JavaScript, so let's get to work modernizing your new digs.

Books-'N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

BOOK

Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
MOVIE

Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD

Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

 */

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
 
 //not sure about here
  set isCheckedOut(status){
  	this._isCheckedOut = status;
  }
  
  get title (){
    return this._title;
  }
  
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  
  get ratings(){
    return this._ratings;
  }
  

   //not sure about here
  toggleCheckOutStatus(){
   	if (this._isCheckedOut === true){
      this.isCheckedOut = false;
    }else{
      this.isCheckedOut = true;
    }
  }
  
  getAverageRating(){
    let reducer = (total, num) => {return total + num};
    return this._ratings.reduce(reducer, 0) / this._ratings.length;
  }
  
  addRating(rate){
    this.ratings.push(rate);
  }
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
  get pages(){
    return this._pages;
  }
};

const historyOfEverything = new Book ('A short History of Nearly Everything', 'Bill Bryson', 544)

 //not sure about here
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
};

const speed = new Movie ('Speed', 'Jan de Bont', 16);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
