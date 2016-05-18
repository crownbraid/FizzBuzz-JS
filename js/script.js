$('document').ready(function() {
  let num;
  do {num = parseInt(prompt("How high should FizzBuzz count?", "100 is the standard."));} 
    while (isNaN(num) || num < 1);
  fBuzz(1, num);
});

function fBuzz(start, end) {
  for (let i = start;i <= end;i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      $('body').append("<p>FizzBuzz</p>");
    } else if (i % 3 == 0) {
      $('body').append("<p>Fizz</p>");
    } else if (i % 5 == 0) {
      $('body').append("<p>Buzz</p>");
    } else {
      $('body').append("<p>" + i + "</p>");
    };
  };
};