window.onload = function () {
    lax.setup()
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax)
}

var section = document.querySelector("#banner")

section.onscroll = function () {
    console.log(section.sc);

}