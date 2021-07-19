const url = "http://hp-api.herokuapp.com/api/characters";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data != undefined){
            var list = document.getElementById("list")
            Object.keys(data).forEach(function (key, index){
                var newItem = document.createElement("option")
                console.log(newItem);
                newItem.textContent = data[key].name;
                newItem.value = key;
                list.appendChild(newItem)
            }) 
            
        } 
    })

function getEnd(){
    console.log("in get end");
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data.results[0].name)
    //     if (data != undefined){
    //         var list = document.getElementById("result")
    //         list.value = JSON.stringify(data)
    //         // var lists = document.getElementById("result")
    //         // lists.data.results[0].name = JSON.stringify(data)
    //     } 
    // })
}