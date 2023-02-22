
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

document.addEventListener("scroll", () => {
    const buildEL = document.getElementById("build")
    if (isScrolledIntoView(buildEL)) {
        document.body.style.backgroundColor = "blueviolet"
    }
})
document.addEventListener("scroll", () => {
    const heroEl = document.getElementById("Hero")
    if (isScrolledIntoView(heroEl)) {
        document.body.style.backgroundColor = "black"

    }
})