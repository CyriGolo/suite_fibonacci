let nombre1 = 0;
let nombre2 = 1;
let result

let btn = document.querySelector("#btn")
let input = document.querySelector('#nbr')
const listeElement = document.querySelector("#maListe");

let tableauResult = []

function selectResult(){
    for(let i = 0; i < input.value; i++ ){
        result = nombre1 + nombre2;
        nombre1 = nombre2
        nombre2 = result
        tableauResult.push(result)
    }
}

function resultLi() {
    const n = input.value;
    const resultat = selectResult(n);
    tableauResult.forEach(function(valeur) {
        const li = document.createElement("li");
        li.textContent = valeur;
        listeElement.appendChild(li);
    });
}

btn.addEventListener("click", ()=>{
    selectResult()
    resultLi()
    nombre1 = 0;
    nombre2 = 1;
})

body.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      btn.click();
    }
  });