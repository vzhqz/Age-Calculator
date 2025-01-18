const loader = document.getElementById("loader");
const result = document.getElementById("resultText");
const age = document.getElementById("userAge");

function calculateAge() {
    loader.style.display = "block";
    result.textContent = "";

    if(age.value === "") {
        setTimeout(() => {
            loader.style.display = "none";
            result.innerHTML = "You can't leave the input field empty <strong>lil nigga</strong>";
        }, 3000);
    } else {
        setTimeout(() => {
            loader.style.display = "none";
            result.innerHTML = `Your age is <strong>${age.value}</strong>`;
        }, 3000);

    }
}