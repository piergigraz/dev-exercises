//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// The following function try find all the possible solutions
const checkSum = (arr,sum) => {
              let addends = [];
              let sol = [];
              // get rid of duplicates from the initial array
              arr = arr.filter((n,i) => arr.indexOf(n) ===i );
              //collect the addends into the array
              for(let i=0 ; i<arr.length ; i++){
                for(let j=0 ; j<arr.length ; j++){
                  if (i !== j){
                    arr[i]+arr[j] === sum ? addends.push([arr[i],arr[j]]) : 0;
                    };
                };
              };
              //sorting solution array so that each couples can be compared with one another [1,2],[2,1] => [1,2],[1,2] are the same
              sol = addends.map(el => el.sort());
            
              // delete duplicates
              for(let i=0 ; i<sol.length ; i++){
                for(let j=0 ; j<sol.length ; j++){
                 if(i != j && sol[i][0] == sol[j][0] && sol[i][1] == sol[j][1]){
                  elim = sol.splice(j,1);
                 // for debugging console.log the duplicates removed from solution array
                 // console.log( `duplicates: ${elim}`);
                };
                };
              };

              return console.log(sol);

};

checkSum([2,3,4,1,6,4],3);
// [ [ 1, 2 ] ]

// let's try this to see how it goes with duplicates
checkSum([2,3,4,1,6,4],5);
// [ [ 2, 3 ], [ 1, 4 ] ] 


// with negative numbers

checkSum([2,3,4,1,5,2,-1,7,-2,0,6],5);
// [ [ 2, 3 ], [ 1, 4 ], [ 0, 5 ], [ -1, 6 ], [ -2, 7 ] ] 

