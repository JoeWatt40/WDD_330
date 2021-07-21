const url = "http://hp-api.herokuapp.com/api/characters";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            console.log(data);
            var list = document.getElementById("list")
            Object.keys(data).forEach(function (key, index){
                var newItem = document.createElement("option")
                newItem.textContent = data[key].name;
                newItem.value = key;
                list.appendChild(newItem)
            })             
        } 
    })

function getEnd(){
    const  index = document.getElementById("list").selectedIndex - 1; 
    // const y = document.getElementById("list").options;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            for (i=0; i < data.length; i++){
                var list = document.getElementById("result");
                var newItem = document.createElement("p");
                list.appendChild(newItem);
                list.innerHTML = "Actor Name: " + data[index]["name"];
                list.innerHTML += "\n";
                list.innerHTML += "House: " + data[index]["house"];
                list.innerHTML += "\n";
                list.innerHTML += data[index]["image"];
                x.href += data[index]["image"];
            }        
                    
        } 
    })
}

const change = document.getElementById("list");
change.addEventListener("change", getEnd);