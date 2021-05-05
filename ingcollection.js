const fs = require('fs');

let predata = fs.readFileSync('./data.json');
let data = JSON.parse(predata);
let ingred = [];


const getIng = new Promise((res, rej) => {
    data.forEach((d) => {
        let ings = d.ingredients;
        ings.forEach((t) => {
            ingred.push(t)
        })
    })
    res(ingred)
});

async function collectAndsave() {
    let prevaluetoSave = await getIng;
    let uniqueSet = [...new Set(prevaluetoSave)];
    fs.writeFileSync('./ingredientsonly.json', JSON.stringify(uniqueSet))
}

collectAndsave();