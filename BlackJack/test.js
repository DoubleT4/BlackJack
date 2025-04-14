import {deck} from "./fetchapp.js"

let DeckCarte = [];

async function addData() {
  let data = await deck();
  return data;
}

await addData()

DeckCarte.push(await addData());




const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn_start");
let multi = 52
const random = Math.floor(Math.random() * multi)
let array = []

function choixCarte(table){
    for(let i = 0; i < table.length; i++){
        if(i === random){
            array = [table[i]]
        }
    }
    return array
}


btnStart.addEventListener("click", () => {
    
    choixCarte(DeckCarte[0])
    console.log()
    array.map((carte) => {
        const div = document.createElement("div")
        div.classList.add("carte")

        div.innerHTML = `<h2>${carte.value} ${carte.type}</h2>`

        container.appendChild(div)

    });
});