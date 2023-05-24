// /* write a function that take in an array and remove all negative 
// numbers e.g [ 12, -3, 5, 8, -100, -4, -8, 300, 35] => [12, 5, 8, 300, 35] */

// /* write a function that takes in two object nd return both object
//  merged into one object */

//  /* write a function called repeat string it takes in a number
//   and a string and repeat d string based on the number */

//    // no. 1 answer 



const x =[ 12, -3, 5, 8, -100, -4, -8, 300, 35];

function removeNegativeNum(arr){
    let negativeNum = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i] >= 0){
            negativeNum.push(arr[i]);
        }
    } 
    return negativeNum;
   
}
 x.sort(((a, b) => b - a));
console.log(removeNegativeNum(x))


// // no. 2 amswer



//  /* write a function called repeat string it takes in a number
//   and a string and repeat d string based on the number */

function repeatString(num, str){
  for(let i = 0; i<num; i++)
  if (num <= 0){
     return'';
  }
  return str.repeat(num);
}
const repeatedstring = repeatString(3, 'Grace');
console.log(repeatedstring);


// function repeatString(num, str){
//   let repeatedstring = "";
//   for(let i =0; i < num; i++){
//     repeatedstring += str;
//   }
//   return repeatedstring;
// }
// const repeatedstring = repeatString(3, Abuma);
// console.log(repeatedstring);



let firstObject= { 
  a: 30, 
  b: 50, 
  }; 
 
let myObj = { 
  c: 60, 
  d: 13, 
  };

 mergedObject = {
    ...firstObject,
    ...myObj
  };
  console.log(mergedObject)