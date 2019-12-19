let Run = function(){

 let yourAge = GetTheAge();
 let yourEthnic = GetTheE();
 let yourShoeSize = getTheSize();
  document.getElementById("output").innerHTML = "You are " + YourAge + "years old and are currently " + YourEthnic + " with a size of " + YourShoeSize ;
};
 let GetTheAge = function(){
 
 let radio1= document.getElementById("radioAge1");
 let radio2= document.getElementById("radioAge2");
 let radio3= document.getElementById("radioAge3");
 let age = "";
 
 if(radio1.checked){
   age = "8-12";
 }else if (radio2.checked){
   age = "13-18";
 }else{
   age= "19 and up " ;
 }
 return age;
};
 
let GetTheE = function(){
 let white = document.getElementById("checkClass1");
 let black = document.getElementById("checkClass2");
 let latino = document.getElementById("checkClass3");
 let asian = document.getElementById("checkClass4");
 let other = document.getElementById("checkClass5");
 let Ethnic = "";
 
 if(white.checked){
   Ethnic += "white";
 }

  if (black.checked){
   Ethnic += "black";
 }

  if (latino.checked){
   Ethnic += "latino";
 }

  if (asian.checked){
   Ethnic += "asian";
 }

  if(other.checked){
   Ethnic += "other";

 }

 return Ethnic;

};
 
let getTheSize = Function(){
 let radio1 = document.getElementById("radio5");
 let radio2 = document.getElementById("radio6");
 let radio3 = document.getElementById("radio7");
 let radio4 = document.getElementById("radio8");
 let radio5 = document.getElementById("radio9");
 let Size = "";
 
 if(radio5.checked){
   Size = "2-4";

 }else if (radio6.checked){
   Size = "5-7";

 }else if (radio7.checked){
   Size = "8-10";

 }else if (radio8.checked){
   Size = "11-13";

 }else{
   Size = " 14-18" ;

 }

 return Size;

 };








