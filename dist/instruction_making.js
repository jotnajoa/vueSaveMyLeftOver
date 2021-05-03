const fs = require('fs');
let predata = fs.readFileSync('./recipes_raw_nosource_ar.json');
let data = JSON.parse(predata);




const getData = () => {
    let emptyarr = [];
    return new Promise((res, rej) => {
        for (let key in data) {
            // console.log(data[key].instructions)
            let keyvalue = key;
            let instruction = data[key].instructions;
            emptyarr.push({ id: keyvalue, instructions: instruction })
        }
        res(emptyarr)
    })
}

async function makedata() {
    let arr = await getData();
    fs.writeFileSync('finaldata.json', JSON.stringify(arr))
};

makedata();

// console.log(data)