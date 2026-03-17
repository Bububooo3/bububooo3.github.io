document.addEventListener("DOMContentLoaded", () => {
    const textMap = new Map();
    const elements = document.querySelectorAll(".typewriter");

    elements.forEach((el) => {
        textMap.set(el, el.textContent.trim());
        el.textContent = "";
    });

    const timer = setInterval(() => {
        textMap.forEach((text, el) => {
            let i = el.textContent.length;
            if (i < text.length) {
                el.textContent += text.charAt(i);
            }
        });

        const allFinished = Array.from(textMap.keys()).every(
            (el) => el.textContent.length === textMap.get(el).length
        );

        if (allFinished) {
            clearInterval(timer);
        }
    }, 50);
});
