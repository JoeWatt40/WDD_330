//variable containing url request
const requestURL = "https://swapi.dev/api/";

//fetch request from URL
fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("list")
            Object.keys(data).forEach(function (key, index){
                var newItem = document.createElement("option")
                // console.log(newItem)
                console.log(key)
                newItem.textContent = key
                newItem.value = data[key]
                list.appendChild(newItem)
            }) 
            
        } 
    })

function getEnd(event){
    alert(event.target.value)
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("result")
            list.value = JSON.stringify(data)
        } 
    })
}
    
