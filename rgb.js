const btn_rgb = document.getElementById("rgb");
const color_rgb = document.querySelector(".color");

btn_rgb.addEventListener("click", function () {
    // Generowanie losowego koloru RGBA
    const randomColor = generateRandomRGB();
    
    document.body.style.backgroundColor = randomColor;
    color_rgb.textContent = randomColor;
    
});

function generateRandomRGB() {
    const r = getRandomNum();
    const g = getRandomNum();
    const b = getRandomNum();

    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomNum() {
    return Math.floor(Math.random()*256);
}
