//function_with_parameter
function sum(a,b){
    console.log(a+b);
}

sum(10,20);
sum(230,550);

function hello(fname,lname){
    console.log("hello" + fname + " " + lname);
}

hello("Palak","Mishra");
hello("PALAK"); //lname=undefined 

//giving default value
function hello(fname="PALAK"){
    console.log(fname);
}

hello();