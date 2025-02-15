'use strict';

//array
const hockeyPlayers = [
  {
    name: "Connor McDavid",
    team: "Edmonton Oilers",
    position: "Center",
    gamesPlayed: 56,
    goals: 33,
    assists: 72,
    points: 105
  },
  {
    name: "Auston Matthews",
    team: "Toronto Maple Leafs",
    position: "Center",
    gamesPlayed: 50,
    goals: 41,
    assists: 25,
    points: 66
  },
  {
    name: "Alexander Ovechkin",
    team: "Washington Capitals",
    position: "Left Wing",
    gamesPlayed: 54,
    goals: 32,
    assists: 24,
    points: 56
  },
  {
    name: "Sidney Crosby",
    team: "Pittsburgh Penguins",
    position: "Center",
    gamesPlayed: 55,
    goals: 24,
    assists: 38,
    points: 62
  },
  {
    name: "Nathan MacKinnon",
    team: "Colorado Avalanche",
    position: "Center",
    gamesPlayed: 48,
    goals: 20,
    assists: 45,
    points: 65
  }
];

console.log(hockeyPlayers)
//only values from object
const copyOfPlayer = [...hockeyPlayers];
console.log(copyOfPlayer[1]);

//index
for (const player in copyOfPlayer) {
  console.log(copyOfPlayer[player].name); 
}
console.log('--------------------------------------------')
//object
for(const player1 of copyOfPlayer){
  console.log(player1.name);
}

console.log('--------------------------------------------')

for(const { name: n, team: t, position: p, gamesPlayed: gp, goals: g, points: po, assists: a, } of copyOfPlayer){
  console.log(`${n} is playing currently in club ${t} at position ${p}. Stats: goals ${g}, assists ${a} and point together ${po}. 
    games played ${gp}`)
}

//copying one object from array and change the value. Notice the original object doesn't change
const copyOfObject = { ...hockeyPlayers[0] };
console.log(copyOfObject);

console.log(copyOfObject.name);
copyOfObject.name = 'Henrik Mulari';
console.log(copyOfObject);
console.log(hockeyPlayers[0]);

//optional chaining ja Nullish coalescing
console.log(hockeyPlayers[0]?.name ?? 'NO name avaliable');
console.log(hockeyPlayers[0]?.coach ?? 'NOT avaliable');

//rest operation arrays
const [palyer1, player2, , player4, ...restOfPlayers] = hockeyPlayers;
console.log(palyer1);
console.log(player2);
console.log(player4);
console.log(restOfPlayers);

console.log('-------------END OF ARRAY--------------')

//object
const hockeyPlayersObj = {
  connorMcDavid: {
    name: "Connor McDavid",
    team: "Edmonton Oilers",
    position: "Center",
    gamesPlayed: 56,
    goals: 33,
    assists: 72,
    points: 105
  },
  austonMatthews: {
    name: "Auston Matthews",
    team: "Toronto Maple Leafs",
    position: "Center",
    gamesPlayed: 50,
    goals: 41,
    assists: 25,
    points: 66
  },
  alexanderOvechkin: {
    name: "Alexander Ovechkin",
    team: "Washington Capitals",
    position: "Left Wing",
    gamesPlayed: 54,
    goals: 32,
    assists: 24,
    points: 56
  },
  sidneyCrosby: {
    name: "Sidney Crosby",
    team: "Pittsburgh Penguins",
    position: "Center",
    gamesPlayed: 55,
    goals: 24,
    assists: 38,
    points: 62
  },
  nathanMacKinnon: {
    name: "Nathan MacKinnon",
    team: "Colorado Avalanche",
    position: "Center",
    gamesPlayed: 48,
    goals: 20,
    assists: 45,
    points: 65
  }
};


console.log(hockeyPlayersObj);
const entriesOfObject = [...Object.entries(hockeyPlayers)];
const valueOfObject = [...Object.values(hockeyPlayers)];
const keyOfObject = [...Object.keys(hockeyPlayers)];
console.log(entriesOfObject);
console.log(valueOfObject);
console.log(keyOfObject);

//destucturing objects
for(const {name, team, position, gamesPlayed, goals, assists} of valueOfObject){
  console.log(name, team, position, gamesPlayed, goals, assists);
};

for(const playerObj of keyOfObject){
  console.log(playerObj);
};

for(const [key, {name, position, ...restOfObject}] of entriesOfObject){
  console.log(key, name, position, restOfObject);
};