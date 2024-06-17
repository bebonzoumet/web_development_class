document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('logado')) {
        document.getElementById('btn-sair').onclick = () => {
            sessionStorage.removeItem('logado');
            window.location.href = 'index.html';
        };
    } else {
        document.body.innerHTML = "<h1>Você não está logado!</h1>";
    }
});

const container = document.createElement('div');
container.id = 'container-cards'

document.body.appendChild(container);

const montaCard = (entrada) => {
    const card = document.createElement('div');
    card.className = 'div-card'
    card.setAttribute('player-id', entrada.id)

    const divImagem = document.createElement('div');
    divImagem.className = 'imagem';

    const imagem = document.createElement('img');
    imagem.className = 'imagem-jogador'
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;

    const divSaibaMais = document.createElement('div');
    divSaibaMais.className = 'div-saiba-mais';

    const btnSaibaMais = document.createElement('button');
    btnSaibaMais.className = 'btn-saiba-mais';
    btnSaibaMais.innerHTML = 'Saiba mais';

    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = entrada.posicao;

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = entrada.nome;

    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(divSaibaMais);
    divSaibaMais.appendChild(btnSaibaMais);
    card.appendChild(pPosicao);
    card.appendChild(pNome);

    return card;
}

const pegaDados = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

document.getElementById('btn-masculino').onclick = () => {
    container.innerHTML = ''
    pegaDados("https://botafogo-atletas.mange.li/2024-1/masculino").then(
        (entrada) => {
            dados = entrada
            entrada.forEach(
                (atleta) => {
                    container.appendChild(montaCard(atleta));
                }
            )
        }
    )
}

document.getElementById('btn-feminino').onclick = () => {
    container.innerHTML = ''
    pegaDados("https://botafogo-atletas.mange.li/2024-1/feminino").then(
        (entrada) => {
            dados = entrada
            entrada.forEach(
                (atleta) => {
                    container.appendChild(montaCard(atleta));
                }
            )
        }
    )
}

document.getElementById('btn-all').onclick = () => {
    container.innerHTML = ''
    pegaDados("https://botafogo-atletas.mange.li/2024-1/all").then(
        (entrada) => {
            dados = entrada
            entrada.forEach(
                (atleta) => {
                    container.appendChild(montaCard(atleta));
                }
            )
        }
    )
}

document.getElementById('pesquisa-nome').onkeyup = ( ev ) => {
    if (ev.target.value.length > 2 || ev.target.value.length == 0) {
        const filtrado = dados.filter(
            (ele) => {
                const noNome = ele.nome.toLowerCase().includes(ev.target.value)
                const naPosicao = ele.posicao.toLowerCase().includes(ev.target.value)
                return noNome || naPosicao
            }
        )
        container.innerHTML = '';
        filtrado.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta))
            }
        )
    }
}

document.getElementById('select-categoria').onchange = ( ev ) => {
    if (ev.target.value == "masculino") {
        container.innerHTML = '';
        pegaDados("https://botafogo-atletas.mange.li/2024-1/masculino").then(
            (entrada) => {
                dados = entrada
                entrada.forEach(
                    (atleta) => {
                        container.appendChild(montaCard(atleta));
                    }
                )
            }
        )
    }
    else if (ev.target.value == "feminino") {
        pegaDados("https://botafogo-atletas.mange.li/2024-1/feminino").then(
            (entrada) => {
                dados = entrada
                entrada.forEach(
                    (atleta) => {
                        container.appendChild(montaCard(atleta));
                    }
                )
            }
        )
    }
    else {
        pegaDados("https://botafogo-atletas.mange.li/2024-1/all").then(
            (entrada) => {
                dados = entrada
                entrada.forEach(
                    (atleta) => {
                        container.appendChild(montaCard(atleta));
                    }
                )
            }
        )
    }
}

container.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('btn-saiba-mais')) {
        sessionStorage.setItem('selectedPlayerId', ev.target.closest('.div-card').getAttribute('player-id'));
        window.location.href = "saibamais.html"
    }
});
