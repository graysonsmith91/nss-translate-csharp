console.log("Let's roll some dice, baby!");
console.log("---------------------------");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Roll = () => {
    let dieValue = getRandomInt(1, 6)
    let dieString = "Unknown";

    switch (dieValue) {
        case 1:
            dieString = "one";
            break;
        case 2:
            dieString = "two";
            break;
        case 3:
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }

    const die = {
        name: dieString,
        value: dieValue
    }

    return die;

}

for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();
    let dieTotal = die1.value + die2.value;

    let message = `${die1.name} + ${die2.name} == ${dieTotal}`;
    if (die1.value == die2.value) {
        message += " DOUBLES!";
    }

    console.log(message);
}

const ToString = () => {
    let dieString = "Unknown";

    switch (this.Value) {
        case 1:
            dieString = "one";
            break;
        case 2:
            dieString = "two";
            break;
        case 3:
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }

    return dieString;
}