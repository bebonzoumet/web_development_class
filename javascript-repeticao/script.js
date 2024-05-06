console.log("Usando o forEach", "--------------------------------------------------------------");

dados.forEach(
    (elemento) => {
        console.log(elemento.nome)
    }
);


console.log("Usando o while", "----------------------------------------------------------");

let indice = 0;

while (indice < dados.length){
    console.log("A posição de", dados[indice].nome, "é", dados[indice].posicao);
    indice++;
}

console.log("Usando o for", "---------------------------------------------------------------------------");

for(let i=0; i<dados.length; i++){
    console.log("A altura de", dados[i].nome, "é", dados[i].altura, "m")
}

console.log("Usando o for of","------------------------------------------------------------------------------------------");

for (const atleta of dados) {
    console.log(atleta.nome_completo)
}

//const atleta = dados[15]

const card = document.getElementById("grid-container")

dados.forEach(atleta => {
    card.innerHTML += `
    <div class='card'>
        <imagem>
            <img src=${atleta.imagem} alt='foto de ${atleta.nome}'></img>
        </imagem>
        <p class='posicao'>${atleta.posicao}</p>
        <p class='nome'>${atleta.nome}</p>
        <p class='descri'>${atleta.descricao}</p>
        <p class='nascimento'>${atleta.nascimento}</p>
    </div>
    `;
});

