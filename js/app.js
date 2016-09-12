//Problem: No user interaction causes no change to aplication
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//cache current color
color = $(this).css("background-color");
});

//When add colour is pressed
$("#revealColorSelect").click(function(){
	//Show colour select or hide the color select	
	changeColor();
	$("#colorSelect").toggle();
});

//update the new colour span	
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	
	$("#newColor").css("background-color", "rgb(" + r + ","+ g +", " + b + ")");
}


//When colour slides change
$("input[type=range]").change(changeColor);

//When add colour is pressed
	//Append the colour to the controls
	//Select the new colour

//On mouse events on the canvas
	//Draw lines

	