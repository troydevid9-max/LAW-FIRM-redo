function headerAll() {
    const navLinks = document.querySelector(".nav-links")
    const navInside = `<a href="../index.html">Home</a>
                    <a href="../PAGES/about.html">About</a>
                    <a href="../PAGES/practice.html">Practice</a>
                    <a href="../PAGES/attorney.html">Attorneys</a>
                    <a href="../PAGES/legalCases.html">Legal Cases</a>
                    <a href="../PAGES/contact.html">Contact</a>`


    const navOutside = `<a href="./index.html">Home</a>
                    <a href="./PAGES/about.html">About</a>
                    <a href="./PAGES/practice.html">Practice</a>
                    <a href="./PAGES/attorney.html">Attorneys</a>
                    <a href="./PAGES/legalCases.html">Legal Cases</a>
                    <a href="./PAGES/contact.html">Contact</a>`
    console.log(navLinks)




    // <a href="./PAGES/index.html">Home</a>
    //                 <a href="./PAGES/about.html">About</a>
    //                 <a href="./PAGES/practice.html">Practice</a>
    //                 <a href="./PAGES/attorney.html">Attorneys</a>
    //                 <a href="./PAGES/legalCases.html">Legal Cases</a>
    //                 <a href="./PAGES/contact.html">Contact</a>

    // console.log(pageLocation)

    // console.log(pageType)

    if (pageLocation.includes("PAGES")) {
        navLinks.innerHTML = navInside
    }
    else if (!pageLocation.includes("PAGES")) {
        navLinks.innerHTML = navOutside
    }

    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.getElementById("navMenu");


    function call() {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active");
    }


    hamburger.addEventListener("click", call)


    console.log(hamburger)
}