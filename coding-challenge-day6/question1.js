
// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const CleanTheRoom = array => {
    const sorted = [...array.sort((a,b)=>a-b)];
    let ordered = [];
    let nestedArrays = [];
        sorted.map((n,index) =>{                
                if (index === 0 || n === nestedArrays[nestedArrays.length-1]){
                    nestedArrays.push(n);
                } else {
                    ordered.push(nestedArrays);
                    nestedArrays = [];
                    nestedArrays.push(n);
                }
            });
           
            //fix the bug of not adding last item or serie of items at the last cycle of .map (saved in nestedArrays).
            ordered.push(nestedArrays);
        
            ordered = ordered.flatMap(el => el.length === 1 ? el : [el]);
      
    return ordered;
    };

 
console.log(CleanTheRoom(input));

// [ [ 1, 1, 1, 1 ], [ 2, 2, 2 ], 4, 5, 10, [ 20, 20 ], 391, 392, 591 ] 
