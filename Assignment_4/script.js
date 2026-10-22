let num=prompt("Enter Number for print table:");

console.log("--Multiplication Table of",num ,"=--");
for(let i=0;i<=5;i++){
  
  console.log(num,'*',i,"=",num*i)
}

console.log("-- First number > 10 divisible by 6--")
let count=11;

while(true){
  if(count % 6 === 0){
    console.log("Found:",count);
    break;
  }
  count++;
}


// Do while for that skip number and continue:
let i = 0;
// console.log("3 and 5 is skip ")
do {
    i++;
    

    if (i === 3 || i === 5) {
        continue;
    }

    // console.log(i);

} while (i < 10);