const gif = document.getElementById("loadingGif");
const result = document.getElementById("resultText");
const age = document.getElementById("userAge");

function calculateAge() {
    gif.style.display = "block";
    result.textContent = "";

    if(age.value === "") {
        setTimeout(() => {
            gif.style.display = "none";
            result.innerHTML = "You can't leave the input field empty <strong>lil nigga</strong>";
        }, 3000);
    } else {
        setTimeout(() => {
            gif.style.display = "none";
            result.innerHTML = `Your age is <strong>${age.value}</strong>`;
        }, 3000);

    }

    }

