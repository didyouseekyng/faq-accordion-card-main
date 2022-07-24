const accordion = document.querySelectorAll(".faq-card__container");
accordion.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  })
})