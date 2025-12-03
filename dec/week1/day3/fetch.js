//get requst
let getData = async () =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    let ul = document.createElement("ul");
    json.forEach(ele => {
        let li = document.createElement("li");
        li.innerText = ele.title;
        ul.append(li)
    });
    document.body.append(ul)
}
getData()
//post request
let createData = async ()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        body: JSON.stringify({
            title: "qlith",
            desc: "this is qlith innovation",
            age:20
        }),
        headers:{
            "Content-type": 'application/json'
        },
    })
    let data = await res.json()
    console.log(data);
    
}
createData()




//put request
//we have to give the specific id to update that part

let updateData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method : "PUT",
        body: JSON.stringify({
            title: "new title",
            body: "this is new body",
            age:20
        }),
        headers:{
            "Content-type": 'application/json'
        },
    })
    let data = await res.json()
    console.log(data);

}
updateData()




//delete request
//we have to give the specific id to delete that part
let deleteData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"
    })
    let data = await res.json()
    console.log(data);  //{} //retur empty object
}
deleteData()