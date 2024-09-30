let button = document.getElementById('colorBtn');

function changeBackgroundColor() {
    let colors = ['bg-red', 'bg-blue', 'bg-yellow', 'bg-pink'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.className = randomColor;
}

button.addEventListener("click", changeBackgroundColor);