

function normalfunctionArea(length=5, width=4){
  return length*width;
}

const ArrowfunctionArea= (length,width)=>{
  return length*width;
}
// Standard Function Area (Default 5x4): 20

console.log("Standard Function Area (Default ",5,"*",4,"):", normalfunctionArea())

console.log("Arrow Function Area (Custom",10,"*",3,"):", ArrowfunctionArea(10,3))

{
let blockVar=10;
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}