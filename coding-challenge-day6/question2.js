//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const array = [1,5,3,3];

const findCouple = (arr,sum) =>{
                const addends = [];
                for(let i=0 ; i<arr.length ; i++){
                    for(let j=0 ; j<arr.length ; j++){
                        if (i !== j && arr[i]+arr[j] === sum){
                           addends.push([arr[i],arr[j]]);
                          };
                          // I could end the for loops once addends got a couple: 
                          // if(addends.length > 0) {
                          //   i = arr.length;
                          //   j= arr.length;
                          // };
                        
                        };
                };
                if(addends.length == 0) {
                  addends.push(`no numbers found`);
                  };
                return console.log(`(${addends[0]}) makes the sum requested: ${sum}`);
  }

  findCouple([1,2,6,4], 5);
