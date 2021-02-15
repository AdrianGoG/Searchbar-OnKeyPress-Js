	
	document.getElementById('input').onkeyup = function(ev) {

		ev.preventDefault();

		search();

	};

	

	function search() {


	
var input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
 	event.preventDefault();

  if (event.keyCode === 13) {
   		
    document.getElementById("button").click();

   
    };  
}); 

  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("ul");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

