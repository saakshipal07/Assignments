const productArray=[
  {
    
  name:'Laptop',
  price:800
},
{
  name:"mouse",
  price:25
},
{
  name:"keyboard",
  price:45
},
{
  name:'desktop',
  price:150
}
]

console.log('-- All Products (forEach) --')
productArray.forEach(element => {
  console.log(`item: ${element.name} - Price: $${element.price}`)
  
});

console.log("-- Filtered Products (Price < $50) --")
const filterArray=productArray.filter((ele => ele.price<50))
console.log(filterArray)

console.log("-- Mapped Product Tags (map) --")
const mapArray=productArray.map((ele => ele))
console.log(mapArray)