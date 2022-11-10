// const name = 1;
// let name1 = "string";
// let name2 = true;
// let name3 = false;
// let name4 = null;
// let name5 = underfined;
// var name2 = 3;

// name = "salut";
// name1 = "salut"


// console.log(name);
// console.log(name1);
// let score = null;



// let ion = 2 ,
//  vasea =4;
// console.log (ion+vasea);
// score= ion+vasea;
// console.log(typeof ion);

// const nume = "Popil";
// const prenume = "Laura";
// console.log(nume +"  "+ prenume);

// let a = "text";
// let b = 4;
// console.log(a +"  "+ b);
// let.score = null;
// console.log(score);
// let ion = 
// alert("salut")
// prompt("salut cum te numesti")
//----------------------------------------------------//////////////////////////

// const Http = new XMLHttpRequest()
const url = "https://jsonplaceholder.typicode.com/posts";

// Http.open("Get",url);
// Http.send();

// Http.onreadystatechange = () =>{
// console.log(Http.responseText);

// }

const  arrayData =[];


fetch (url) 

.then ((response) => 
    response.json()
    )

.then((data)=>{
   
    arrayData.push(data)

    info_data(arrayData , "sunt")
}
)

function info_data(array_respons) {
    array_respons.forEach(element => {
        element.forEach(item =>{
            const body = document.querySelector("body")
        const tag_h1 = document.createElement("h1")
        tag_h1.innerHTML = item.title
        tag_h1.className = "title";

        const tag_p = document.createElement("p")
        tag_p.innerHTML = item.title
        tag_p.className = "info_content";

        const div = document.createElement("div")
        div.className = "container";

        div.appendChild(tag_h1)
        div.appendChild(tag_p)
        body.append(div)

        } )
    });
}
const arr = [[
    {body:"ddd",title:"Salut"},
    {body:"dddddddddd",title:"00000000000000000000000"},
    {body:"66666666666666666666",title:"8888888888888888888888"},

]

]
info_data(arr)

function filtre_data(params, data_info) {
    params.forEach(element => {
        element.forEach(item =>{
           
           if (item.title.includes(data_info)) {
            console.log(item);
        //    } else {
        //     console.log("nu este asa");
            
           }
    })
    })
    
}
filtre_data(arr,"Salut")

