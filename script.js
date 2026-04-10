document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const openBtns = document.querySelectorAll(".openModal");
    const closeBtn = document.querySelector(".close");

    openBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    document.getElementById("submitForm").onclick = () => {
        alert("Заявку відправлено!");
        modal.style.display = "none";
    };

    const programBtn = document.querySelector(".scrollToProgram");
    const programSection = document.getElementById("program");

    programBtn.addEventListener("click", () => {
        programSection.scrollIntoView({ behavior: "smooth" });
    });

});