const name1 = ["Esperanza", "Franco", "Nia"];
const name2 = ["Lily", "Marshall", "Ted", "Barney", "Robin"];
const name3 = ["Luke", "Leia", "DarthVader", "HanSolo"];

function secretSociety(arr) { 
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    console.log(res.sort());
}

secretSociety (name1);
secretSociety (name2);
secretSociety (name3); 