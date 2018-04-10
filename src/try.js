let menu = {
  _courses: {
    appetizers: [],
    main: [],
    desserts: []
  },
  
  set appetizers (newAppetizers) {
    
  },
  
  get appetizers (){
  
  },
  
  set main (newMain) {
    
  },
  
  get main (){
    
  },
  
  set dessert (newDessert) {
    
  },
  
  get dessert (){
    
  },
  
  get courses (){
    return {
      appetizers: this._appetizers,
      main: this._main,
      desserts: this.desserts
    };
  },
  
  addDishToCourse (courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    
    return dishes[randomIndex];
  },
  
  generateRandomMeal(){
    let appetizers = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('main');
    let desserts = this.getRandomDishFromCourse('desserts');
  }
};
menu.addDishToCourse('appetizers', 'aaaa', 123);
menu.addDishToCourse('appetizers', 'bbbb', 13);
menu.addDishToCourse('appetizers', 'cccc', 23);

menu.addDishToCourse('main', 'aaaa', 123);
menu.addDishToCourse('main', 'bbbb', 13);
menu.addDishToCourse('main', 'cccc', 23);

menu.addDishToCourse('desserts', 'aaaa', 123);
menu.addDishToCourse('desserts', 'bbbb', 13);
menu.addDishToCourse('desserts', 'cccc', 23);
let meal = menu._generateRandomMeal;
console.log(meal);