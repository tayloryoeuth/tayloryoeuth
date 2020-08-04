// referenced W3 schools
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore

// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName("ul")[0];
var newItem = document.createElement("li");
var textnode = document.createTextNode("cream");
newItem.appendChild(textnode);
list.appendChild(newItem);

// ADD NEW ITEM START OF LIST

// create element li
var newItem = document.createElement("li");

// create the  text kale
var textnode = document.createTextNode("kale");

//add that item to the list
newItem.appendChild(textnode);

//add item to the first of the array
list.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItem = list.getElementsByTagName("li");
for(var i=0; i < listItem.length; i++){
  listItem[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2 = document.getElementsByTagName("h2")[0];
var number = document.createElement("span");
var count =0;
// go through all items to get length in a counter
for(var i=0; i < listItem.length; i++){
  count ++;
}

var textNode = document.createTextNode(count);
number.appendChild(textNode);
h2.appendChild(number);
