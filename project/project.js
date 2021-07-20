const url = "http://hp-api.herokuapp.com/api/characters";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            console.log(data);
            var list = document.getElementById("list")
            Object.keys(data).forEach(function (key, index){
                var newItem = document.createElement("option")
                // console.log(newItem);
                newItem.textContent = data[key].name;
                newItem.value = key;
                list.appendChild(newItem)
            }) 
            
        } 
    })

function getEnd(){
    const x = document.getElementById("list").selectedIndex;
    const y = document.getElementById("list").options;
    console.log(y[x].text);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("result")
            for(i = 0; i < data.length; i++){
                // console.log(data[i].name)
                list.value = JSON.stringify(data)
                }
        } 
    })
}



const change = document.getElementById("list");
change.addEventListener("change", getEnd);