// Checboxen
const divstylecheckbox = document.getElementById(`divStyle`);
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
    console.log(e.target);

    const name = e.target.name;
    
    if (name === "content") {
        resultBox.innerHTML = e.target.value;
    }
 }

 // lyssna på checkboxen för att ändra bakgrundsfärg
 divstylecheckbox.addEventListener("change", function () {
    const colorValue = document.getElementById("color").value;
    resultBox.style.backgroundColor = colorValue;
    });

    // lyssna på textfältet för att ändra innehållet i div:en
    for (let filed of textfield) {
        filed.addEventListener("input", handleInput);
    }

// lyssna på knappen för att ta bort div:en
removeBtn.addEventListener("click", function () {
    resultBox.remove();
});