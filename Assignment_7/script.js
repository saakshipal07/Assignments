let productarray= JSON.parse(localStorage.getItem('data')) ||[]
let product=prompt("Enter product:")
let price=prompt("Enter product price:")


console.log("--- Initializing Inventory System ---");
console.log(`[Prompt executed: User adds "${product}"at "${price}"`)
localStorage.clear(productarray)

if(product !== null){
  productarray.push({
    name:product,
    price,
})

}
  
localStorage.setItem('data',JSON.stringify(productarray));
console.log('--- Processing Inventory Roster (forEach) ---')


productarray.forEach((ele)=>{
  let category;
  switch(true){
    case ele.price >=500:
      category='Premium';
      break;

     case ele.price >=200:
      category='Standard';
      break;  
    case ele.price >=10:
    category='budget';
    break;
  }

  
  console.log(
            `* Item : ${ele.name} - ($${ele.price}) -> Category: ${category}`
        );
        
})

function calculateTotal(productarray) {
    let total = 0;

    for (const product of productarray) {
        total += Number(product.price);
    }

    return total;
}


console.log('--- Financial Analytics ---')


const totalInventoryValue = calculateTotal(productarray);


console.log("Total Inventory Value: $" + totalInventoryValue);

const AffordableItem =productarray.filter((ele)=> ele.price<=200).map((ele)=>{
  return `"${ele.name}"`
});

console.log(`Filtered Affordable Items (under: $200): [${AffordableItem}]`)
const formatedList=productarray.map((element)=> {

return `"${element.name}: ${element.price}"`

});

console.log((`Formatted Report List:[${formatedList}]`))
