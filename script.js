// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// Reveal sections when scrolling

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);


sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(25px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(section);

});


// Current year automatically

const yearElement = document.querySelector("footer p");

if (yearElement) {

  yearElement.innerHTML =
    `© ${new Date().getFullYear()} Biriyani Adda. All Rights Reserved.`;

}
