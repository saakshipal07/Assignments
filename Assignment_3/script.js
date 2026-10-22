 
 let grade ;
 let remark;
 const marks=prompt("Enter user marks");
 if (marks >100){
  alert("Invalid marks")
 }
 else{
  console.log("Score:",marks);
  calculate()
 }


 function calculate(){
 if (marks >=90 && marks<100){
  grade='A';
 }
 else if (marks>=80 && marks<90){
  grade='B'
 }
 else if(marks>=70 && marks <80){
  grade='c'
 }
 else if (marks>=60 && marks<70){
  grade='D'

 }
 else if(marks>=2 && marks<60){
  grade='F'
 }
 else{
  console.log("Invalid Marks")
 }

 switch(grade){
  case 'A':
  case 'B':   
  case 'c':
  case 'D':
    remark =(grade !== 'invalid Marks')?"Passed":"Error";
    break;
  case 'F':
    remark='Failed';
    break;
    default:
      remark="Invalid"
 }
 console.log("Grade:",grade);
 console.log("Status:", remark);
 }