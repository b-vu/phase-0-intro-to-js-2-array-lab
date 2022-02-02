// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => {
    cats.push(name);
}

const destructivelyPrependCat = name => {
    cats.unshift(name);
}

const destructivelyRemoveLastCat = () => {
    cats.splice(cats.length - 1);
}

const destructivelyRemoveFirstCat = () => {
    cats.splice(0, 1);
}

const appendCat = name => {
    const newArray = [...cats, name];
    return newArray;
}

const prependCat = name => {
    const newArray = [name, ...cats];
    return newArray;
}

const removeLastCat = () => {
    const newArray = cats.slice(0, cats.length - 1);
    return newArray;
}

const removeFirstCat = () => {
    const newArray = cats.slice(1);
    return newArray;
}