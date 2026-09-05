//variables 

//types of variable:var 

var x="HELLO GUYS!";
var y=100;
x="PALAK MISHRA"; //overwrite x 
var y=234;
document.write(x);
document.write(y);

//types of variable:let
let firstName="RAVI";
firstName="HARRY";
//here redeclaration is not allowed

//types of variable:const
 const second="HELLO";
 document.write(second);
 //second="world"...not allowed ,error will be there

//Data Type
var x; //undefined
x="hello!!"; //string
x=25; //number
x=true; //boolean
x=["HTML","css"]; //Object
x={first:"jane",last:"doe"}; //Object
x=null; //null

//check datatype 
document.write(typeof x);

//Arithmetic Operators
var a=2;
var b=3;
var c=a+b; //addition
document.write(c);

c=a-b;//subtraction
document.wrtie(c);

c=a*b; //multiplication
document.write(c);

c=a/b; //division
document.write(c);

c=a**b; //exponentiation
document.write(c);

c=a%b; //modulus
document.write(c);

//Assignment operators
var x=10
var y=x;

//comparison operators
//==,===,!=,!==,>,<,>=,<=

//if-else statement
if (x==y){
    document.write("Equal!")
}
else{
    document.write("not equal")
}

//logical operator 
//&&,||,!

//conditional (ternary) operator
var z=(x>10)?"true":"false";
document.write(z);

//switch statement
/*switch (expression){
case condition1: statement(s)
break;
case condition2: statement(s)
break;
default:
    statement(s)
}



