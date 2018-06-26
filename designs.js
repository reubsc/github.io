// Select color input
// Select size input
/*
@author: Reuben Rotich

*/
var height, width, color, table;

// When size is submitted by the user, call makeGrid()
// Submit form with id function.


	  $( "#sizePicker" ).click(function(e) {
	  		e.preventDefault();
	  		height = $("#inputHeight").val();
	  		width = $("#inputWeight").val();
	  		table = $('#pixelCanvas');
	  		makeGrid(width, height);
	  		//alert( "Make a Grid which Measures : "+height+" x "+width );
	  });



function makeGrid(x, y) {
  // Your code goes here!
  	   $(table).html('');
  	for (var i = 1; i <= x; i++) {
      var row = $('<tr></tr>').appendTo(table);

      for (var j = 1; j <= y; j++) {
          $('<td></td>').appendTo(row);
        }
    }
    
    // add colors to the cells
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })


   // $(table).html();

}




