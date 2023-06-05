let darkMode = document.querySelector(".mode");
let body = document.body;
let googleWord = document.querySelector(".google-word");

darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        googleWord.src = "google word.png";
    } else {
        googleWord.src = "google word white.png";
    }
});