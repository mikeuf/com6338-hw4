var div1Title = document.getElementById('div1').title;
alert(div1Title);

var divLucky = document.createElement('div');
divLucky.title = 'Lucky!';
document.getElementById('div1').appendChild(divLucky)
