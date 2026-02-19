function headerAll() {

    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.getElementById("navMenu");


    function call() {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active");
    }


    hamburger.addEventListener("click", call)


    console.log(hamburger)
}