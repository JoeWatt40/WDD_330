const form = document.forms["hero"];
form.addEventListener("submit", makeHero(), false);

function makeHero(event) {

    event.preventDefault();

    const hero = {};

    hero.name = form.heroName.value;
    console.log(JSON.stringify(hero));
    alert(JSON.stringify(hero));

    return hero;
}