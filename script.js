const heading = document.getElementById("welcomeHeading");

if (heading) {
    const text = heading.textContent;
    heading.innerHTML = "";

    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");

        span.textContent = letter === " " ? "\u00A0" : letter;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.08}s`;

        heading.appendChild(span);
    });
}