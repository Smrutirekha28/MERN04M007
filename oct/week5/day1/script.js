//declaration (var,let,const)
// ............
//     ->where
//     ->how

console.log("welcome to variable second class");



//declaration(how)


//......................................var................................................

var a;
console.log(a);

// the default value of any variable is undefined
//only declaration of variable using var keyword is possible

//only initialisation 
a=10;
console.log(a);
//only initialisation of variable using var keyword is possible
//initialisation without declaration using var is possible


var b=20;
console.log(b);
//both initialisation and declaration are possible


//re-declaration
var b=30;
console.log(b);
//re-declaration and re-initialisation are both possible using var keyword



//....................................let.......................................................
//only declaration
let fname = "jhgd";
console.log(fname);//undefined
//only declaration using let keyword is possible

 fname = "abcd";
 console.log(fname);
//update is also possible 

//only initialisation
// fname="tunguru";
// console.log(fname);
//only initialisation using let keyword is possible


//re-declaration
// let fname="tunguru";
// console.log(fname);
//re-declaration using let keyword is not possible


//redeclaration and re-intialisation
// let fname ="hjds";
// console.log(fname);
//redeclaration and re-intialisation is not possible


//.......................const.................
// only declaration is not possible
// only initialisation is not possible


// both declaration and initialisation is possible
const age=18;
console.log(age);

//both re-declaration and re-initialisation is not possible
//update is not possible


// {
//     let email = "abc"
   
// }
// console.log(email); //error because the first email is in block level
// let email="iuayh"
// console.log(email);//iuayh






//.........................Hoisting and TDZ (Temporal Dead Zone)................................................

// the following is the hoisting concept(when we declare using var keyword it will be hoisting mean it goes to the top of the program)
//-----------------------------------------------------------------------
//hoisting concept is only possible in var keyword but not possible in let, const(it is the tdz)


console.log("first",email);//first undefined
var email = "kshr@gmail.com";
console.log("second",email);//second kshr@gmail.com



// console.log("first",lname);// error (Cannot access 'lname' before initialization)
// let lname = "sahoo";
// console.log("second",lname);

// console.log("first", mname);//Error: Cannot access 'mname' before initialization
// const mname= "erhg";
// console.log("second",mname);



//..............................Primitive datatype..................
let tunguruAge = 40;//tunguruAge is the camel case
console.log(tunguruAge);
console.log(typeof(tunguruAge));


let tunguruName="tunguru bhol";
console.log(tunguruName);
console.log(typeof(tunguruName));


let isMarried = true;
console.log(isMarried);
console.log(typeof(isMarried));

7
let village  = undefined;
console.log(village);
console.log(typeof(village));


let tunguruHaveMoney = null;
console.log(tunguruHaveMoney);
console.log(typeof(tunguruHaveMoney));//object


let tunguruMobileNo = BigInt(874392012);
console.log(tunguruMobileNo);
console.log(typeof(tunguruMobileNo));



let tunguruFaceStructure = Symbol("!");
console.log(tunguruFaceStructure);
console.log(typeof(tunguruFaceStructure));
console.log(typeof typeof tunguruFaceStructure);//string




//..........................Non-Primitve data type.....................
// default value of object and array is null
//..........object.............
let obj={
    name: "smruti",
    age: 20, 
    email:"smruti@gmail.com"
}
console.log(obj.name);
//or
console.log(obj["age"]);
console.log(typeof obj);//object



//............array...............

let arr=[1,2,3,4,5];
console.log(arr);
console.log(typeof arr);//object because here the key is index and value is value
console.log(arr[10]);//undefined

//array can store different types of data type
let arrr=[1,2,3,4,5,"qlith",{name:"abcd",age:19,email:"abcd@gamil.com",arr:["tunguru",30]}];
console.log(arrr[6].arr[2]);

// OBJECT store key and value but array store in index
 
