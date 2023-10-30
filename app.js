const btns = document.querySelectorAll(".btn");
const colors_s = document.querySelector(".color");
const save = document.querySelector(".save");
const maxElements = 5; // Maksymalna liczba przechowywanych elementów
const elementsArray = []; // Tablica przechowująca elementy

btns.forEach(function(btn) {
    
    btn.addEventListener("click", function(e) {
        
        
        const id=new Date().getTime();
        
        const newItem = document.createElement("div");//nowy item z zapisnym kolorem
        newElement = formatter(id);
        //save.appendChild(newItem);
        //console.log(formatter());
        if (newElement !== null && newElement.trim() !== "") {
            addElementToStorage(newElement);
        }
    });
});
//formatter
function formatter(id){
    
    const text=colors_s.textContent;
    return`<div class="color_saver" id=${id} style="background-color: ${text}">
    <h3>saved color : <span >${text}</span>
    </h3>
    </div>`;
}
// Funkcja do dodawania elementu
function addElementToStorage(element) {
    elementsArray.push(element);
    if (elementsArray.length > maxElements) {
        elementsArray.shift(); // Usuń pierwszy element, jeśli przekroczono maksymalną liczbę
    }
    renderElements(); // Aktualizuj widok, aby wyświetlić elementy
}
// Funkcja do wyświetlania elementów w HTML
function renderElements() {
    const container = document.querySelector(".container");
    save.innerHTML = "";
    elementsArray.forEach(function (element) {
        const newItem = document.createElement("div");
        newItem.innerHTML = element;
        save.appendChild(newItem);
    });
}
window.addEventListener("load", renderElements);