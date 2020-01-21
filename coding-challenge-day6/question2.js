//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const array = [1,5,3,3];

const findCouple = (arr,sum) =>{
                let found =0;
                for(let i=0 ; i<arr.length ; i++){
                    for(let j=0 ; j<arr.length ; j++){
                        if (i !== j && arr[i]+arr[j] === sum){
                          found++; 
                          return console.log(`(${[arr[i],arr[j]]}) makes the sum requested: ${sum}`);
                        };
                    };
                };
                found === 0 ? console.log(`No number can make the sum requested`) : 0;
            };

  // Return just the first addends found, console logging, without storing solutions
  findCouple([1,2,4,1,2], 5);
// (1,4) makes the sum requested: 5 

findCouple([1,-1,2,5], 5);
// No number can make the sum requested 
