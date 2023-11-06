//The user will enter a english paragraph and all that is needed is to just to implement counting
// characters and words without whitespaces.
import inquirer from "inquirer";
function counter(word) {
    let freewhitespace = word.replace(/\s/g, "");
    return freewhitespace.length;
}
async function startwordcount(counter) {
    let res = await inquirer.prompt({
        type: "input",
        message: "write paragraph ",
        name: "word"
    });
    console.log(counter(res.word));
}
startwordcount(counter);
