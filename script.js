// Checboxen
const divstylecheckbox = document.getElementById(`divstyle`);
// Textfältet
const textfield = document.getElementById(`textfield`);
// knappen
const removeBtn = document.getElementById(`removeBtn`);
// div för resultatet
const resultBox = document.getElementById(`resultBox`);
// kontroll utskrifter
console.log(divstylecheckbox, textfield, removeBtn, resultBox);

function handleinput() {
    // hämta värdet från textfältet
    console.log(e.taget);

    const name = e.target.name;

    if (name === "content") {
        resultBox.innerHTML = e.target.value;
    }
 }