console.log("Do you believe in magic?");
console.log("------------------------");

const GetAllSpells = () => {
    const allSpells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ];

    return allSpells;
}

const allSpells = GetAllSpells()

const MakeEvilSpellBook = (allSpells) => {
    const evilBook = {}
    evilBook.Title = "Evil Book";
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil)
    return evilBook;
}

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = {}
    goodBook.Title = "Good Book";
    goodBook.Spells = allSpells.filter(spell => !spell.IsEvil)
    return goodBook;
}

const goodBook = MakeGoodSpellBook(allSpells)
const evilBook = MakeEvilSpellBook(allSpells)

const DisplaySpellBook = (book) => {
    console.log(`${book.Title}`);
    book.Spells.forEach(book => {
        console.log(`${book.Name}`)
    });
}

DisplaySpellBook(goodBook)
console.log(``)
DisplaySpellBook(evilBook)