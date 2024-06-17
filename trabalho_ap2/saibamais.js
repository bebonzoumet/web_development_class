document.addEventListener('DOMContentLoaded', () => {
    const idJogador = sessionStorage.getItem('selectedPlayerId');
    if (!idJogador) {
        document.getElementById('detalhes-jogador').innerHTML = "<h1>Nenhum jogador selecionado!</h1>";
        return;
    }

    const pegaDados = async (caminho) => {
        const resposta = await fetch(caminho);
        const dados = await resposta.json();
        return dados;
    }

    pegaDados(`https://botafogo-atletas.mange.li/2024-1/${idJogador}`).then(playerData => {
        const divDetalhes = document.getElementById('detalhes-jogador');

        const imagemJogador = document.createElement('img')
        imagemJogador.className = "imagem-jogador"
        imagemJogador.src = `${playerData.imagem}`
        imagemJogador.alt = `Foto de ${playerData.nome}`

        const pPosicao = document.createElement('p')
        pPosicao.innerHTML = `<strong>Posição:</strong> ${playerData.posicao}`

        const pNome = document.createElement('p')
        pNome.innerHTML = `<strong>Nome:</strong> ${playerData.nome}`

        const pJogos = document.createElement('p')
        pJogos.innerHTML = `<strong>Número de jogos:</strong> ${playerData.n_jogos}`

        const pNaturalidade = document.createElement('p')
        pNaturalidade.innerHTML = `<strong>Naturalidade:</strong> ${playerData.naturalidade}`

        const pDataNascimento = document.createElement('p')
        pDataNascimento.innerHTML = `<strong>Data de Nascimento:</strong> ${playerData.nascimento}`

        const pAltura = document.createElement('p')
        pAltura.innerHTML = `<strong>Altura:</strong> ${playerData.altura}`

        const pDesde = document.createElement('p')
        pDesde.innerHTML = `<strong>No Botafogo desde:</strong> ${playerData.no_botafogo_desde}`

        const pDetalhes = document.createElement('p')
        pDetalhes.innerHTML = `<strong>Detalhes:</strong> ${playerData.detalhes}`

        divDetalhes.appendChild(imagemJogador)
        divDetalhes.appendChild(pPosicao)
        divDetalhes.appendChild(pNome)
        divDetalhes.appendChild(pJogos)
        divDetalhes.appendChild(pNaturalidade)
        divDetalhes.appendChild(pDataNascimento)
        divDetalhes.appendChild(pAltura)
        divDetalhes.appendChild(pDesde)
        divDetalhes.appendChild(pDetalhes)
        // detalhesDiv.innerHTML = `
        //     <div class="detalhes-jogador">
        //         <img class="imagem-jogador" src="${playerData.imagem}" alt="Foto de ${playerData.nome}">
        //         <p><strong>Posição:</strong> ${playerData.posicao}</p>
        //         <p><strong>Nome:</strong> ${playerData.nome}</p>
        //         <p><strong>Número de jogos:</strong> ${playerData.n_jogos}</p>
        //         <p><strong>Naturalidade:</strong> ${playerData.naturalidade}</p>
        //         <p><strong>Data de Nascimento:</strong> ${playerData.nascimento}</p>
        //         <p><strong>Altura:</strong> ${playerData.altura}</p>
        //         <p><strong>No Botafogo desde:</strong> ${playerData.no_botafogo_desde}</p>
        //         <p><strong>Detalhes:</strong> ${playerData.detalhes}</p>
        //     </div>
        // `;
    });

    document.getElementById('btn-voltar').onclick = () => {
        sessionStorage.removeItem('selectedPlayerId')
        window.location.href = 'outra.html';
    }
});
