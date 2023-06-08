function confirmarSaida() {
    var dialog = document.getElementById("confirmDialog");
    dialog.style.display = "block";

    var simBtn = document.getElementById("simBtn");
    var naoBtn = document.getElementById("naoBtn");

    simBtn.addEventListener("click", function () {
        dialog.style.display = "none";
        window.location.href = "../index.html";
    });

    naoBtn.addEventListener("click", function () {
        dialog.style.display = "none";
    });
}

document.querySelector("a[href='#Sair']").addEventListener("click", confirmarSaida);

window.history.pushState(null, null, "");
window.addEventListener("popstate", function () {
    window.history.pushState(null, null, "");
});