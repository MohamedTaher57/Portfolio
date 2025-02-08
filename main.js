document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const projectCards = document.querySelectorAll(".project-card");

  const revealOnScroll = () => {
    let triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      let sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("reveal");
      }
    });

    projectCards.forEach((card) => {
      let cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("reveal");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

let footer = document.getElementsByClassName("footer")[0];
footer.innerHTML = `&copy; ${new Date().getFullYear()} Mohamed Taher`;