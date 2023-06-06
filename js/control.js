let darkMode = document.querySelector(".mode");
let body = document.body;
let googleWord = document.querySelector(".google-word");
let appIcon = document.querySelector(".app-img");

darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        googleWord.src = "images/google word.png";
        appIcon.src = "images/appsIconBlack.png";
    } else {
        googleWord.src = "images/google word white.png";
        appIcon.src = "images/appsIconWhite.png";
    }
});