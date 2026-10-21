[8:47 PM, 10/21/2026] Nida Faiz: const sampleText = document.getElementById("sampleText");
const textArea = document.getElementById("textArea");

// Save the original text
const originalText = sampleText.textContent;

// Change text color
function changeColor(color) {
    sampleText.style.color = color;
}

// Increase or decrease font size
function changeSize(amount) {
    let currentSize = parseFloat(
        window.getComputedStyle(sampleText).fontSize
    );

    let newSize = currentSize + amount;

    if (newSize >= 10 && newSize <= 60) {
        sampleText.style.fontSize = newSize + "px";
    }
}

// Change font family
function changeFont(font) {
    sampleText.style.fontFamily = font;
}

// Add or remove text decoration
function toggleDecoration(decoration) {
    let decorations = sa…
[9:17 PM, 10/21/2026] 𝑺𝒚𝒆𝒅𝒂❤︎: Nida math ki bhi bjho
[9:18 PM, 10/21/2026] 𝑺𝒚𝒆𝒅𝒂❤︎: const sampleText = document.getElementById("sampleText");
const textArea = document.getElementById("textArea");

// Save the original text
const originalText = sampleText.textContent;

// Change text color
function changeColor(color) {
    sampleText.style.color = color;
}

// Increase or decrease font size
function changeSize(amount) {
    let currentSize = parseFloat(
        window.getComputedStyle(sampleText).fontSize
    );

    let newSize = currentSize + amount;

    if (newSize >= 10 && newSize <= 60) {
        sampleText.style.fontSize = newSize + "px";
    }
}

// Change font family
function changeFont(font) {
    sampleText.style.fontFamily = font;
}

// Add or remove text decoration
function toggleDecoration(decoration) {
    let decorations = sa
Yh JavaScript ka h?