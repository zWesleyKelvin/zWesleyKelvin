var close = document.getElementById('close');
var popup = document.getElementById('popup');
	
popup.style.background = 'rgba(0, 0, 0, 0.5)';
close.addEventListener("click", function() {
  popup.style.display = 'none';
});