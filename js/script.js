$(function() {
  let num;
  do {num = parseInt(prompt("How high should FizzBuzz count?", "100 is the standard."));} 
    while (isNaN(num) || num < 1);
  fBuzz(1, num);
});

function fBuzz(start, end) {
  let inc = 1;
  if (start == end) {inc = 0;}
  if (start > end) {inc = -1;}
  
  for (let i = start;i != end + inc;i += inc) {
    if (i % 3 == 0 && i % 5 == 0) {
      addPara('FizzBuzz');
    } else if (i % 3 == 0) {
      addPara('Fizz');
    } else if (i % 5 == 0) {
      addPara('Buzz');
    } else {
      addPara(i);
    };
  };
};

function addPara(txt) {
  $('body').append("<p>" + txt + "</p>");
}