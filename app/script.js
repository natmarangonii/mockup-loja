function carregardados(){
    fetch('../data/produtos.json')
    .then(response => response.json())
    .then(response => renderizacards(response))
}

function renderizacards(dados){
    const main = document.querySelector("main")
    main.innerHTML = ""
    dados.forEach(produto => {
        const card = document.createElement("div")
        card.classList.add('card')
        card.innerHTML = `
        <h2>${produto.nome}</h2>
        <img src="${produto.img != ''?produto.img:'./assets/nenhumm.png'}">`
        main.appendChild(card)
    });
}