const sliders = document.querySelectorAll('.slider');
let counter = 0;

sliders.forEach((slider, index) => {
    slider.style.bottom = `${index * 100}%`;
});

const PrevBtn = () =>{
    if (counter == 0) {
        document.getElementById('Prev').style.cursor = "none";
    } else {
        counter--;
        ImageSlide();
    }
}
const NextBtn = () =>{
    if (counter==4) {
        document.getElementById('Next').style.cursor = "none";
    }
    else {
        counter++;
        ImageSlide();
    }
}

const ImageSlide = () => {
    sliders.forEach((slider) => {
        slider.style.transform = `translateY(${counter * 100}%)`;
    });
}