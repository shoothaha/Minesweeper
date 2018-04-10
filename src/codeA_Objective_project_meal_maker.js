//Meal Maker
/* As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal! */

//create basic menu object
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  set appetizers (newAppetizers) {
    
  },
  
  //the getters will be called below, not the _courses
  //so must at least return the _courses in getters
  get appetizers (){
    return this._courses['appetizers'];
  },
  
  set mains (newMain) {
    
  },
  
  get mains (){
    return this._courses['mains'];
  },
  
  set desserts (newDessert) {
    
  },
  
  get desserts (){
    return this._courses['desserts'];
  },
  
  get courses (){
    return {
      //here calls the Getter key: 
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {
      Name: dishName,
      Price: dishPrice
    };
    //push the dish to _courses
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
    var dishes = this.courses[courseName];
    return dishes[Math.floor(Math.random()*dishes.length)];
  },
  
  generateRandomMeal(){
    let appetizers = this.getRandomDishFromCourse('appetizers');
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');
    
    let price = appetizers.Price + mains.Price + desserts.Price;
    
    //大小写很重要很重要很重要重要要！！！！！！！
    return `Your order is ${appetizers.Name}, ${mains.Name}, and ${desserts.Name}, The total price is ${price}!`;
    
  },
  

};

menu.addDishToCourse('appetizers', 'aaaaa', 123);
menu.addDishToCourse('appetizers', 'abbbb', 13);
menu.addDishToCourse('appetizers', 'acccc', 23);

menu.addDishToCourse('mains', 'maaaa', 123);
menu.addDishToCourse('mains', 'mbbbb', 13);
menu.addDishToCourse('mains', 'mcccc', 23);

menu.addDishToCourse('desserts', 'daaaa', 123);
menu.addDishToCourse('desserts', 'dbbbb', 13);
menu.addDishToCourse('desserts', 'dcccc', 23);

console.log(menu.getRandomDishFromCourse('mains'));


console.log(menu._courses['mains'][1]['Name']);

console.log(menu.courses);

let meal = menu.generateRandomMeal();
console.log(meal);
