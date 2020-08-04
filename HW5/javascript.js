/*
    File: HW5: Creating an Interactive Dynamic Table
    Taylor Yoeuth
    Contact: taylor_yoeuth@student.uml.edu
    Currently an Undergrad Computer Science Student
    At UMass Lowell taking course 91.61 GUI Programming I.
    Created July 8,2020
*/

function myFunction(){

var bMultiplier = document.getElementById("bMultiplier").value;
var eMultiplier = document.getElementById("eMultiplier").value;
var bMultiplicand = document.getElementById("bMultiplicand").value;
var eMultiplicand = document.getElementById("eMultiplicand").value;
var table = document.getElementById("multitable");

//testing out the values to make sure the form works.
//document.getElementById("multitable").innerHTML = bMultiplier + eMultiplier;

//-----------ERROR HANDLING--------------//

if(bMultiplier == null || bMultiplier == "" || bMultiplicand == null || bMultiplicand == "" || eMultiplicand == null || eMultiplicand == "" || eMultiplier == null || eMultiplier == "")
{
  alert("One of your values are empty!");
  return false;
}

//if starting is > than ending
if(bMultiplier > eMultiplier){
  alert("Error! Your starting multiplier is larger than your ending number");
  return false;
}

//if starting is > than ending
if(bMultiplicand > eMultiplicand){
  alert("Error! Your starting multiplicand is larger than your ending number");
  return false;
}


//used definition and usage to insert rows
//https://www.w3schools.com/jsref/coll_table_rows.asp
var rows = '<tr>'; // make row
rows += '<td>' + '' + '</td>'; // empty space in the top left corner
for(var i = bMultiplier; i <= eMultiplier; i++){
  rows += '<td>' + i + '</td>';
}
 rows += '</tr>'; // closes row

 for(var i= bMultiplicand; i <= eMultiplicand; i++){
   rows += '<tr>'; // skips the row

   // this makes the left column
   rows += '<td>' + i + '</td>';

   // the multiplication between the numbers
   for(var j = bMultiplier; j <= eMultiplier; j++){
     rows += '<td>' + i*j + '</td>';
   }
   rows += '</tr>';
 }

document.getElementById("multitable").innerHTML = rows;
}
