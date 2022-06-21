console.log("Hello universe");
const firstName ="Archana";
let age = 37;
let isCool = true ;
let height=null;
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isCool)
console.log(typeof height)

let x = 4 ;
let  y = 10;
let z = 7 + 9 ;
let sum = x + y + z ;
let diff = (x+y)-(y+z);
console.log(sum);
console.log(diff);

let string = 'hello, Universe'
let welcomeString = string + " " + firstName
console.log(welcomeString)

welcomeString=`Hello , Universe ${firstName}`

console.log(welcomeString)

if (age > 21){
    console.log('You can drink ${firstName}')
}else  {
    console.log(' You ve got some growing up to do ')
}
let score = 78
let passing = 40
score = 30

if (score >= passing ){
    console.log('You passed')
} else 
{
    console.log('try again')
}