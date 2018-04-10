
// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
// It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them. 
// For example, you might want to get the total number of games your team has played, or the average score of all of their games.


let team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }
  ],
  
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }
  ],
  
  //以下调用数据将会调用getter
  get players(){
    return this._players;
  },
  
  //以下调用数据将会调用getter
  get games(){
    return this._games;
  },
  
  //添加player
  addPlayer(firstName, lastName, age){
  	let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    //push函数推送以上数据至player数组
    this._players.push(player);
	},
  
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    
    this._games.push(game);
  }
  
};

//数据添加， 应该有更好的循环方法之类的 以后会改
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('a', 1, 2);
team.addGame('b', 3, 4);
team.addGame('c', 5, 6);

console.log(team.players);
console.log(team.games);