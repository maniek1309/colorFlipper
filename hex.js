const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn_hex = document.getElementById("hex");
const color_hex = document.querySelector(".color");

btn_hex.addEventListener("click", function() {
    let hexColor= '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
        //console.log(hexColor);
    }
    color_hex.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};