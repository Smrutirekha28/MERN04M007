// local can access global but global can't access local 


console.log("today we are going to learn variable");
let a = 10;
console.log(a);


let A = 20;
console.log(A);

let a1 = 10;
console.log(a1);

let $ = 50;
console.log($);

let _ = 60;
console.log(_);



let $name1 = "abcd";
console.log($name1);




// ..................................................var...........................


//var
//declaration
// ............
//     ->where
//     ->how

//declaration in global level
var name = "xyz"
console.log(name);
{

    console.log(name);
}

function access() {
    console.log(name);
    
}access()

//if i declare the variable using let keyword in global level then i can access the variable anywhere(global, block,function)


//if i can declare a var in global level any where i can access the variable (that may be var , let & const)


// declaration at block level
{
    var age = 20;

}console.log(age);
// if we declare var in a block level then we can access it inside the block , outside the block & inside a function


//declaration at function level
function declaration_variable() {
    var pass = "123a";
    console.log(pass);
}declaration_variable()

// if i declare a var in function  we can access it in the function but not outside the function , not in a block







// ..................................................let...........................



//let
//declaration
// ............
//     ->where
//     ->how



//declaration(where)
//declaration at global level
let fullName = "fakir"
console.log(fullName);
//if i declare the variable using let keyword in global level then i can access the variable anywhere(global, block,function)


//declaration at block level
{
    let nickName = "tunguru";
    console.log(nickName);
    
}


//if i declare the variable using let keyword in block level then i can access the variable only inside the block not outside the block, not in a function


//declaration at function level
function declaration_variable() {
    let pass = "123a";
    console.log(pass);
}declaration_variable()
//if i declare the variable using let then we can access the variable inside the function but not outside the function because of restriction





// ..................................................const...........................



//const
//declaration
// ............
//     ->where
//     ->how


// global level declaration
const veg ="potato"
console.log(veg);
//if i declare the variable using const keyword in global level then i can access the variable anywhere(global, block,function)



// block level declaration
{
    const flower = "lily";
    console.log(flower);
    
}
//if i declare the variable using const keyword in block level then i can access the variable only inside the block not outside the block, not in a function




//declaration at function level
function declaration_variable() {
    const pass = "123a";
    console.log(pass);
}declaration_variable()
//if i declare the variable using const then we can access the variable inside the function but not outside the function because of restriction
