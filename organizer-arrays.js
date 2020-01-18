const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let example = [1,1,1,1,99,5,3,4,5,20,20,99,908,908];

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].


const CleanTheRoom = array => {
    const sorted = [...array.sort((a,b)=>a-b)];
    let ordered = [];
    let nestedArrays = [];
        sorted
            .map((n,index) =>{
                
                if (index === 0 || n === nestedArrays[nestedArrays.length-1]){
                    nestedArrays.push(n);
                } else {
                    ordered.push(nestedArrays);
                    nestedArrays = [];
                    nestedArrays.push(n);
                }
            });
            
            ordered = ordered.flatMap(el => el.length === 1 ? el : [el]);
      

    return console.log(ordered);

    }



 
CleanTheRoom([0,4,22,77,2,2,1,99,12,150,87,65,2,1,1,22,22,65]);

  


// //not mine, but fixed by myself:

// let arr = [1,2,4,591,392,4,55,4,391,2,5,10,2,1,1,1,20,20];

// function toSubArrays (arr){
//     // sort the array numerically
//     let sortArr = arr.sort((a,b) => a-b);
//     // temp holding arrays
//     let tmpArr = [];
//     let result = [];
    
//     for (let i = 0; i <= sortArr.length; i++) {
//         if ((i === 0) || (sortArr[i] === sortArr[i - 1])){
//             // add first element or matching element to tmp array
//             tmpArr.push(sortArr[i]);
//         } else {
//             // add tmp array to result array
//             result.push(tmpArr);
//             // clear the tmp array
//             tmpArr = [];
//             // add new value to tmp array
//             tmpArr.push(sortArr[i]);
//         }
        
//     }
    
//     result = result.flatMap( arr => arr.length === 1 ? arr : [arr]);

    
//     return result;
// }
// console.log(toSubArrays(arr));