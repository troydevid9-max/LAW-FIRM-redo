const pageType = document.body.dataset.layout
const pageLocation = window.location.pathname



console.log(pageLocation)

console.log(pageType)

const load = async (id, file) => {

    //FETCH THE FILE 

    const response = await fetch(file);

    //PROCESS THE FETCHED RESPONSE

    const data = await response.text();

    //GET THE HEADER DIV 

    const header = document.getElementById(id)

    //SET THE CORRECT HEADER

    header.innerHTML = data;
};

//IF STATEMENTS TO SET THE CIRRECT HEADER AND FOOTER

async function head() {

    if (pageType === "public") {
        if (pageLocation === "/FRONTEND/index.html" || pageLocation === "/" || pageLocation === "/index.html") {
            await load("header", "./COMPONENTS/header.html")

            headerAll()
            await load("footer", "./COMPONENTS/footer.html")
        }

        else {
            await load("header", "../COMPONENTS/header.html")
            await load("footer", "../COMPONENTS/footer.html")
        }

    }

}
head()
