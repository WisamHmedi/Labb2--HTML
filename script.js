// Checboxen
const divstylecheckbox = document.getElementById(`divstyle`);
// Textfältet
const textfield = document.getElementsByClassName(`textfield`);
// knappen
const removeBtn = document.getElementById(`removeBtn`);
// div för resultatet
const resultBox = document.getElementById(`resultBox`);
// kontroll utskrifter
console.log(divstylecheckbox, textfield, removeBtn, resultBox);

function handleInput(e) {
    // hämta värdet från textfältet
    console.log(e.taget);

    const name = e.taget.name;

    if (name === "content") {
        resultBox.innerHTML = e.target.value;
    }
 }

 divstylecheckbox.addEventListener("change", function () {
    const colorValue = document.getElementById("color").value;
    resultBox.style.backgroundColor = colorValue;
    });

    for (let filed of textfield) {
        filed.addEventListener("input", handleinput);
    }

removeBtn.addEventListener("click", function () {
    resultBox.remove();
});