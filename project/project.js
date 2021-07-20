const url = "http://hp-api.herokuapp.com/api/characters";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
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
    const  displayCharacter = document.getElementById("list").selectedIndex - 1; 
    // const y = document.getElementById("list").options;
    // console.log(y[x].text);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("result");
            var newItem = document.createElement("p");
            console.log(list);
            console.log(newItem);
            list.appendChild(newItem);
           
            // newItem.appendChild(x)
            //  for (i=0; i < data.length - 1; i++){
            //      console.log(data[i]);
            //  }
            // var list = document.getElementById("list");
            // var newItem = document.createElement("p");
            // newItem.innerHTML = y[x].text;
            // console.log(newItem);
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