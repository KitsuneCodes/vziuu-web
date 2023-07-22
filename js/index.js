window.addEventListener('load', scaleBoxes);

function scaleBoxes() {
    const boxes = document.querySelectorAll('.box');
    const scaleFactor = 0.8; // Wartość skali (0.8 oznacza 80% oryginalnego rozmiaru)

    boxes.forEach(box => {
        box.style.transform = `scale(${scaleFactor})`;
    });
}