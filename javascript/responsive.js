var Responsive =
{
init: function()
{
var link = document.getElementsByClassName("topnav");
$(link).bind("click", clickListener);

function clickListener()
{
document.getElementsByClassName("topnav") [0].classList.toggle("responsive");
}//end of clickListener function
}//end of init function
}; //end of object
Responsive.init();


function openForm() {
  document.getElementById("myForm").style.display = "block"; /*getElementById selects the id "MyForm" from my chat div in the html. Style.display sets the element's display type,
																which in this case is block.*/
}

function closeForm() {
  document.getElementById("myForm").style.display = "none"; /*This function selects the id 'MyForm and uses style.display to set the display to 'none', closing my chat box*/
}
