// Problem 11: Title Case a Sentence

function titleCase(str) {

    const newTitle = str.split(" ");
    const result = [];
    for (let st in newTitle) {
        result[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
