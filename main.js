
let myArray = ['13181528', '18138417', '13161118' ];    

let rand = Math.floor(Math.random() * myArray.length);
let count = myArray[rand];
console.log(count)
const myChunkSplits = count.match(/.{1,1}/g); 
console.log(myChunkSplits);
let arr2 = myChunkSplits.map(Number);
   
console.log(arr2)

let sum = 0
let num = 0
        for (let i=0; i < arr2.length; i++){
            if (arr2[i] % 2 == 0){
                sum += arr2[i];
            }else{
               num += arr2[i];
            }
          
        }

  console.log(sum)
 console.log(num)
  const f1 = (sum, num) => {
  if( sum > num ) {
    console.log(100)
  }else{
     console.log(0000)
  }
} 
f1(sum,num)

const f2 = (count) => {
  console.log(count)
  const myChunkSplits = count.match(/.{1,2}/g); 
console.log(myChunkSplits);
let arr3 = myChunkSplits.map(Number);
  console.log(arr3)
   if (arr3[0] & 1 && arr3[2] & 1 && arr3[0] < arr3[2] && arr3[1] % 2 === 0 && arr3[3]% 2 === 0 && arr3[1] < arr3[3]){ 
              console.log(2100)
               }else if (arr3[0] & 1 && arr3[2] & 1 && arr3[0] < arr3[2]){ 
              console.log(1100)
               }else{                                               console.log(100)
                }
} 
f2(count)
