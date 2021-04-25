var links = [
    {
        label : "Week 1 Notes",
        url : "week1/story_editor.html"
    },
    {
        label : "Week 2 Notes",
        url : "week1/index.html"
    }
  ]       

for(i = 0; i < links.length; i++) {
    var list = document.getElementById("list")
    var newItem = document.createElement("li")
    var x = document.createElement("a")
    list.appendChild(newItem)
    newItem.appendChild(x)
    x.href = links[i]["url"]
    x.innerHTML = links[i]["label"]   
}