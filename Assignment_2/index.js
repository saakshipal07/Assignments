
let calculate_Tip;
let Bill =prompt("Enter user's bill amount:")
let Tip= prompt("Enter Tip percentage:")
if (Bill === undefined ){
  console.log("Enter amount ")
}
else{
  console.log("Subtotal:" ,Bill);
  // console.log("Tip percentage:", Tip)
  calculate_Tip= Number((Bill*Tip)/100);
 
  const Total =((Number(Bill) + calculate_Tip))

 
  console.log("Tip percentage:",Tip,"%");
  console.log("Calculated Tip",calculate_Tip);
  console.log("Total Amount to Pay: $",Total)

}