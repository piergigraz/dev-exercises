// Complete the below questions using this array:
var array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const newArray= [];
    array.forEach(obj => {
            newArray.push(obj.username+'!');
            // console.log(obj.username); 
    });

  console.log(newArray);

// SOLUZIONE DI ANDREI:
// let newArray = []
// array.forEach(user => {
// 	let { username } = user;
// 	username = username + "!";
//     newArray.push(username);
//     console.log(user.username);
// })
// console.log(newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(obj => {
  // console.log('normal access to: '+obj.username);
  let {username} = obj; //destructuring for semplicity
  return username+='?';
});
console.log(`With .map the array is ${mapArray}`);

//Filter the array to only include users who are on team: red

const selectedTeam = array.filter( obj => {
    let {team} = obj;
    return team === "red";
});
console.log(selectedTeam, selectedTeam.length);

//Find out the total score of all users using reduce

const totalPoints = array.reduce((acc,obj) => {
    let {score} = obj;
    return score+acc;
} , 0);

console.log(totalPoints);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const neArray = arrayNum.map((num) => {
	return num * 2;
});
console.log(neArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const finalUsers = array.map((user) => {
  // const newItems = user.items.map(feature => feature+='!');
  // user.items = newItems;
    // For short (without declearing the new variable newItems) :
   user.items = user.items.map(feature => feature+='!');
  return user;
    
}); 
console.log(finalUsers);

