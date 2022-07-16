//Write a JavaScript program that accepts two integers and displays the larger of the two.
//comparing non negtivine numbers

if (first > 0 && second > 0 && first > second) {
  document.write("larger is " + first);
} else if (first > 0 && second > 0 && second > first) {
  document.write("larger is " + second);
}
