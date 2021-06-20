var links = [
    {
        label : "Week 1 Assignment",
        url : "week1/index.html"
    },
    {
        label : "Week 2 Assignment",
        url : "week2/index.html"
    },
    {
        label : "Week 3 Assignment",
        url : "week3/index.html"
    },
    {
        label : "Week 4 Assignment",
        url : "week4/index.html"
    },
    {
        label : "Week 5 Assignment",
        url : "week5/index.html"
    },
    {
        label : "To Do Assignment",
        url : "week5/todo.html"
    },
    {
        label : "Week 7 Assignment",
        url : "week7/index.html"
    },
    {
        label : "Week 8 Assignment",
        url : "week8/index.html"
    },
    {
        label : "Week 9 Assignment",
        url : "week9/index.html"
    }
  ]       

for (i = 0; i < links.length; i++) {
    var list = document.getElementById("list")
    var newItem = document.createElement("li")
    var x = document.createElement("a")
    list.appendChild(newItem)
    newItem.appendChild(x)
    x.href = links[i]["url"]
    x.innerHTML = links[i]["label"]   
}

