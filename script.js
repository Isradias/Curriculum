function aba_aberta() {
    const elemento = document.querySelector(".body");
    elemento.style.gridTemplateColumns = "1fr 3fr 1fr";

    const texto = document.querySelectorAll(".contato");

    timeoutID = setTimeout(() => {
        texto.forEach((el, index) => {
            el.style.display = "inline";
            setTimeout(() => el.style.opacity = "1", index * 100);
        });
    }, 250);  

    const img = document.querySelectorAll(".img-lat-esq");

    img.forEach((el) =>{
        el.style.translate = "40%"
    })
}

function aba_fechada() {
    const elemento = document.querySelector(".body");
    elemento.style.gridTemplateColumns = "0.1fr 3.5fr 1fr";

    clearTimeout(timeoutID);

    const texto = document.querySelectorAll(".contato");

    texto.forEach((el) => {
        el.style.opacity = "0",
        el.style.display = "none";
    });

    const img = document.querySelectorAll(".img-lat-esq");

    img.forEach((el) =>{
        el.style.translate = "0%"
    })
}