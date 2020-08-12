/*
    File: HW7: Using the jQuery UI Slider and Tab Widgets
    Taylor Yoeuth
    Contact: taylor_yoeuth@student.uml.edu
    Currently an Undergrad Computer Science Student
    At UMass Lowell taking course 91.61 GUI Programming I.
    Created August 09,2020
*/

//used this for reference
//https://www.sitepoint.com/basic-jquery-form-validation-tutorial/

var tabindex = 1;

$(function(){
    $("form").validate({
      rules: {
        bMultiplier: {
          min: -50,
          max: 50,
          required: true,
          number: true
        },
        eMultiplier: {
          min: -50,
          max: 50,
          required: true,
          number: true
        },
        bMultiplicand: {
          min: -50,
          max: 50,
          required: true,
          number: true
        },
        eMultiplicand: {
          min: -50,
          max: 50,
          required: true,
          number : true
        }
      },
      messages: {
        bMultiplier: {
          required: ' *Must enter an integer'
        },
        eMultiplier: {
          required: ' *Must enter an integer'
        },
        bMultiplicand: {
          required: ' *Must enter an integer'
        },
        eMultiplicand: {
          required: ' *Must enter an integer'
        },
        submitHandler: function(form) {
        form.submit();
        }
      }
  });
});

// slider portion of the assignment
//https://jqueryui.com/slider/#range
//https://stackoverflow.com/questions/19152452/jquery-ui-slider-change-automatically-on-manual-input
function slider() {
  $("#bslider1").slider({
    min: -50,
    max: 50,

    slide: function(event, ui){
      $("#bMultiplier").val(ui.value);
    }
    });
    // change text on input
    $("#bMultiplier").on("keyup", function(e){
      $("#bslider1").slider("value", this.value);
  });

  $("#eslider1").slider({
    min: -50,
    max: 50,

    slide: function(event, ui){
      $("#eMultiplier").val(ui.value);
    }
  });
  // change text on input
      $("#eMultiplier").on("keyup", function(e){
        $("#eslider1").slider("value", this.value);
});

  $("#bslider2").slider({
    min: -50,
    max: 50,

    slide: function(event, ui){
      $("#bMultiplicand").val(ui.value);
    }
  });
  // change text on input
      $("#bMultiplicand").on("keyup", function(e){
        $("#bslider2").slider("value", this.value);
});


  $("#eslider2").slider({
    min: -50,
    max: 50,

    slide: function(event, ui){
      $("#eMultiplicand").val(ui.value);
    }
  });
  // change text on input
      $("#eMultiplicand").on("keyup", function(e){
        $("#eslider2").slider("value", this.value);
});
};


function createTabs() {
  $("#tabs").tabs();
  var bMultiplier = $("#bMultiplier").val();
  var eMultiplier = $("#eMultiplier").val();
  var bMultiplicand = $("#bMultiplicand").val();
  var eMultiplicand = $("#eMultiplicand").val();
  var tabname = bMultiplier + " " + eMultiplier + " " + bMultiplicand + " " + eMultiplicand;

  // this is to create the tab and have it show the table when clicked
  $("div#tabs").prepend("<div class= 'tab'id= " + tabindex + " onclick='showtable(event)'> "+tabname+ "<span class='removeTab' onclick= 'removetab(event)'>×</span> </div>");
// this is used to store the table with the tab
  $("#savedtables").append('<table class="multitable" id= ' + tabindex + ' >' +  document.getElementById("multiplication-table").innerHTML + '</table>' );
// increases the index of the tabs
   tabindex++;
};

// delete tabs
function removetab(event) {
  event.stopPropagation(); // stops the event from the span class
  $('#savedtables .multitable#'+ $(event.target).parent().attr('id') ).remove() // removes table
  $('.tab#'+$(event.target).parent().attr('id')).remove() // removes tab
}

//hides all tables made previously
function clearTable(id = -1){
  $('#savedtables .multitable').hide();
  if( id != -1)
    $('#savedtables .multitable#'+id).show()
};

// needed this so the tables would show
function showtable(event) {
  clearTable(event.target.id);
  console.log(event)
};


function myFunction(){
  var bMultiplier = document.getElementById("bMultiplier").value;
  var eMultiplier = document.getElementById("eMultiplier").value;
  var bMultiplicand = document.getElementById("bMultiplicand").value;
  var eMultiplicand = document.getElementById("eMultiplicand").value;
  var table = document.getElementById("multitable");

  if(bMultiplier == ""){
    return false;
  };

  if(eMultiplier == ""){
    return false;
  };

  if(bMultiplicand == ""){
    return false;
  };

  if(eMultiplicand == ""){
    return false;
  };

  //testing out the values to make sure the form works.
  //document.getElementById("multitable").innerHTML = bMultiplier + eMultiplier;

  //-----------ERROR HANDLING--------------//

  /*
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
  */

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

  document.getElementById("multiplication-table").innerHTML = rows;
  clearTable();
  createTabs();
  return false; // used this so it doesnt flash in and out
}

slider();
  //document.getElementById('form').onsubmit = function(){myFunction()};
