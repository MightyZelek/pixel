var color = $('#colorPicker').val;// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

button.on('click', function makeGrid() {
  var row = $('#input_height').val;
  var col = $('#input_width').val;
  var tbl = $('#pixel_canvas');
tbl.style.width  = '100px';
tbl.style.border = '1px solid black';
  for(var i = 0; i < row; i++){
    var tr = tbl.insertRow();
    for(var j = 0; j < col; j++){
      var td = tr.insertCell();
      td.style.border = '1px solid black';
    }
  }

// Your code goes here!

});
