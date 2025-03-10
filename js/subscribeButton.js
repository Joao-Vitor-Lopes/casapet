document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.querySelector(".newsletter button");

    subscribeButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        alert("O sistema de envio de e-mail não está funcionando ainda.");
    });
});
