//get id for div in html and set variables
const squareElement = document.getElementById("square");
let angle = 0;

function rotate() {
    angle =(angle + 2) % 360;
    squareElement.style.transform  = roate`(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(-rotate);

//sets the interval for the animation
setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);
