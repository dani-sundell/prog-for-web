const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement('h1');
heading.innerHTML = 'Some llamas can live up to 30 years.';
heading.addEventListener('click', headingClicked);
heading.style.cursor = 'pointer';
myEmptyDiv.appendChild(heading);
function headingClicked() {
    document.body.style.backgroundColor = 'cyan';
}