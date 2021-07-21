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
                var x = document.createElement("a");
                newItem.appendChild(x);
                x.href += data[index]["image"];
            }
            // var list = document.getElementById("result");
            // var newItem = document.createElement("p");
            // list.appendChild(newItem);
            // list.innerHTML = data[index].actor;
            
            // list.innerHTML = data[index].actor;
            // newItem.appendChild(x)
            //  for (i=0; i < data.length - 1; i++){
            //      console.log(data[i]);
            //  }
            // var list = document.getElementById("list");
            // var newItem = document.createElement("p");
            // newItem.innerHTML = y[x].text;
           
            // for (i = 0; i < data.length; i++) {
            //     var list = document.getElementById("list")
            //     var newItem = document.createElement("p")
            //     console.log(newItem);
            //     // var x = document.createElement("a")
            //     list.appendChild(newItem)
            //     // newItem.appendChild(x)
            //     // x.href = links[i]["url"]
            //     // x.innerHTML = links[i]["label"]   
            // }
            // console.log(x);
            // var list = document.getElementById("result")
            // // for(i = 0; i < data.length; i++){
            // //     list.value = JSON.stringify(data[i].name)
            // // }  
            // list.value = (y[x].text);          
        } 
    })
}

const change = document.getElementById("list");
change.addEventListener("change", getEnd);