//Looping a Triangle
var hash = '';
for (var i = 0; i < 7; i++) {
  console.log(hash += '#');
}

//FizzBuzz
for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
  	console.log(i);
  }
}

//Chess Board
var size = 8;
var grid = '';

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    var space = ' ';
    var hash = '#';
    if (grid.length % 2 === 0) {
      grid += space;
    } else {
      grid += hash;
    }
  }
  grid += '\n';
}

console.log(grid);
