//2.
var x = "Butter" 
var y = "fly"
var z = x +" "+ y
document.getElementById("demo").innerHTML = z ;
var out = z.length;
document.getElementById("demo1").innerHTML = out ;
//3.
var text = "What is your favourite flavour of ice cream?"
document.getElementById("demo2").innerHTML = text.split(" , ");
console.log(text.indexOf("favourite"))
//.4
var str = "When a JavaScript variable is declared with the keyword 'new', the variable is created as an object.";
console.log(str.length)  //string length
console.log(str.indexOf("JavaScript"))  //indexOf
console.log(str.lastIndexOf("created"))  //lastindexOf
console.log(str.search("declared"))  //Search()
console.log(str.slice(4 , 17))  //Slice()
console.log(str.substring(4 , 26))  //Substring()
console.log(str.substr(7 , 10))  //Substr()
console.log(str.replace("new" , "old"))  //Replace
console.log(str.toUpperCase())  //UpperCase
console.log(str.toLowerCase())  //LowerCase
console.log(str.charAt(10))  //charAt
console.log(str[0])  //property access
console.log(str.split(" , "))  //split
//5.
var x = 1 + "2"
document.getElementById("demo4").innerHTML = typeof x;
var y = 333 + 4
document.getElementById("demo5").innerHTML = typeof y;
var z = true
document.getElementById("demo6").innerHTML = typeof z;
var car = {type:"Fiat", color:"white"};
document.getElementById("demo7").innerHTML = typeof car;
var ope = "* "
document.getElementById("demo8").innerHTML = typeof ope;
//7.
var x = 100 / 3

console.log(Math.round(x.toFixed(2)))
//8.
var z = "10" * 10
document.getElementById("demo10").innerHTML = z;

//.9
var x = true
var y = false
if (x){
	alert("success");
}
if (y){
	alert("failure")
}
//6.
var x = 38;
var y = 22;
var z = x + y;
if (z > 50) {
    alert("value is greater than 50");
}
else if (z = 50){
    alert("value is equal to 50");
   }
   else if (z < 50){
    alert("value is less than 50");
   }
  
  //11.
var points = [50, 90, 1, 3, 25, 9];
document.getElementById("demo16").innerHTML = points;  
 points.sort(function(a, b){return a - b});
  document.getElementById("demo16").innerHTML = points;
//14.
var d = new Date();
console.log(d)
//15.
function myfunction(a , b){
	return a + b;
}
var x = myfunction(1 , 2);
console.log(x)

//17.
var x = { };
x ["fname"] = "Jhon"; 
x ["lname"] = "mik";
x ["roll no"] = "12";
console.log(x)
console.log("My father is " + x.fname) 


//11.
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Violet", "Violet", "Indigo", "Blue ", "Blue ", "Blue ",  "Yellow "];
var x = [];
 for ( var a = 0; a < color.length; a++) {
  if (x.indexOf (color[a]) === -1){
	  x.push(color[a]);
	  document.getElementById("demo20").innerHTML = x;
  }
}
//12.
var colors = ["Blue ", "Green", "Red", "Red", "Orange", "Violet", "Violet", "Violet", "Indigo", "Blue ", "Red", "Blue ", "Blue ",  "Yellow "];
 
function red(color) {
  return color != "Red";
}
 
document.getElementById("demo21").innerHTML = colors.filter(red);
  
 //13.
var a = [10, 20, 30, 40, 50];
[a[0], a[3], a[1], a[4]] = [a[3], a[0], a[4], a[1]]


document.getElementById("demo22").innerHTML = a;
//19.
var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12
};
document.getElementById("demo23").innerHTML = student.name + "," + delete student.rollno + "," + student.sclass;
//10.

var odd = []
var even = []
for(var i = 0;i <= 15; i++)
{
   if (i % 2 === 0 ){
  even.push(i)
   }
   else{
    odd.push(i)
 }
   
}
console.log(even)
console.log(odd)

//20.
var library = [ 
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true,
inStock:true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true,
inStock: false

},
{
author: 'Steve Jobs',
title: 'Thinking fast and slow',
readingStatus: false,
inStock: true

},
{
author: 'Suzanne Collins',
title:  'Mockingjay: The Final Book of The Hunger Games', 
readingStatus: false,
inStock: false
}];

for (var i=0;i<library.length;i++){
	if (library[i].inStock==true && library[i].readingStatus==true){
	alert(library[i].title + " : book is available");
	}
	else if (library[i].inStock==false && library[i].readingStatus==false){
		alert(library[i].title + " : book is out of stock");
	}
	else if(library[i].inStock==false || library[i].readingStatus==false) {
		alert( "presence ofthe book unknown");
	}
	
}
  


	
