const lateralEsquerda = document.querySelector(".lat-esq");
const body = document.querySelector(".body");

lateralEsquerda.addEventListener("mouseover", () => {
    body.style.gridTemplateColumns = "1fr 2fr 1fr";

    document.querySelectorAll(".contato").forEach(el => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, 100); //500 é o tempo para voltar
    });

});

lateralEsquerda.addEventListener("mouseleave", () => {
    setTimeout(() => {
        body.style.gridTemplateColumns = "60px 16fr 6fr";
    }, 100);

    document.querySelectorAll(".contato").forEach(el => {
        el.style.opacity = '0';
    });
});