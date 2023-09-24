let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function handleNext() {
    let items = document.querySelectorAll(".img-cont");
    document.querySelector('.container-slider').appendChild(items[0]);
}

function handlePrevious() {
    let items = document.querySelectorAll(".img-cont");
    document.querySelector('.container-slider').prepend(items[items.length - 1]); // here the length of items = 6
}

next.addEventListener("click", handleNext);
prev.addEventListener("click", handlePrevious);

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        handleNext();
    } else if (event.key === "ArrowLeft") {
        handlePrevious();
    }
});
