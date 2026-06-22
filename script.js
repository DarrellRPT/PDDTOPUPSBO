function showAlert(productName) {
    alert("Anda telah memilih untuk topup: " + productName);
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.parentElement.querySelector(".card-title").innerText;
            showAlert(productName);
        });
    });
});