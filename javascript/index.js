var toto = 2;
var titi = 3;
var result = toto+titi;
var test = toto==titi;
console.log(test);
var test2 = toto===titi;
console.log(test2);

var day;
var month;
var year;
var today = new Date();
day = today.getDate();
month = today.getMonth();
year = today.getFullYear();
month = parseInt(month);
var array = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
document.write("Nous sommes le "+day+" "+array[month]+" "+year);
