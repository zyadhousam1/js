// Write a JavaScript program to find the diagonal of a square where the length of each side is 9
const lenthSides = 9;
const base = 2;
const square = Math.sqrt(base);
const diagonal = lenthSides * square;

console.log('diagonal'= diagonal);


//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
//Apply Heron’s formula
const first =5;
const second =6;
const third = 7;
const twoS=first+second+third;
const oneS=twoS/2;

var area = ((oneS(oneS-first)(oneS-second)(oneS-third)));
const triangleArea= Math.pow(area,0.5);

console.log('triangleArea' = triangleArea);


//Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
//Circumference = 2πr ; Area = πr2. 
const radius = 4;
const circumference = 2*pi*radius;
var area= pi*radius*2;

console.log('area=',area);



