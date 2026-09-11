/* ==========================================
   OPEN LETTER
========================================== */

const openButton = document.getElementById("open-letter");
const openingScreen = document.getElementById("opening-screen");
const mainContent = document.getElementById("main-content");

openButton.addEventListener("click", () => {

    openingScreen.classList.add("opening-hidden");

    mainContent.classList.remove("hidden");

    // Begin typewriter after opening
    setTimeout(() => {
        typeWriter();
    }, 1000);

});


/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const typewriterElement = document.getElementById("typewriter");

const typewriterText =
    "This is not a letter asking you to come back. It is simply my way of finally letting you go.";

let typewriterIndex = 0;

function typeWriter() {

    if (typewriterIndex < typewriterText.length) {

        typewriterElement.innerHTML +=
            typewriterText.charAt(typewriterIndex);

        typewriterIndex++;

        setTimeout(typeWriter, 45);
    }

}


/* ==========================================
   CREATE STARS
========================================== */

const starsContainer = document.getElementById("stars");

const starCount = 90;

for (let i = 0; i < starCount; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 2 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    star.style.animationDuration =
        Math.random() * 4 + 3 + "s";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    starsContainer.appendChild(star);

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const fadeSections =
    document.querySelectorAll(".fade-section");

const observerOptions = {

    threshold: 0.12

};

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, observerOptions);


fadeSections.forEach((section) => {

    observer.observe(section);

});


/* ==========================================
   FINAL GOODBYE BUTTON
========================================== */

const goodbyeButton =
    document.getElementById("goodbye-button");

const lastMessage =
    document.getElementById("last-message");

goodbyeButton.addEventListener("click", () => {

    lastMessage.classList.remove("hidden-message");

    lastMessage.classList.add("show-message");

    goodbyeButton.style.opacity = "0";

    goodbyeButton.style.pointerEvents = "none";

    setTimeout(() => {

        lastMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);

});
