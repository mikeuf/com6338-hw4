var anchorC_Link = document.getElementById('c_link');

anchorC_Link.onclick = function () {
var div1 = document.getElementById('div1');
div1.style.backgroundColor = '#CCCCCC';
div1.innerHTML = "<strong>Right now!</strong> Was that quick or what?";

return false;
};

