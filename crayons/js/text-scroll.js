let paragraphs = [...document.querySelectorAll('p')];
let spans = [];

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
});

spans = [...document.querySelectorAll('span')];

function revealSpans() {
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
            let { left, top } = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * .40)
            
            // Calculate opacityValue
            let opacityValue = 1 - ((top * 0.01) + (left * 0.001));
            opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue.toFixed(3);  // Min opacity of 0.1
            opacityValue = opacityValue > 1 ? 1 : opacityValue;  // Max opacity of 1

            spans[i].style.opacity = opacityValue;
        }
    }
}

// Call the revealSpans function on scroll
window.addEventListener('scroll', revealSpans);
