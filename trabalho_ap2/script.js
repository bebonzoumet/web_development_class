const alvo_senha = "08dcf7d5e80b87a6b2f4fe01e74f4b2303719679b76e3e90f843310c6ffa91c6"

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (hex_sha256(entrada) === alvo_senha) {
        mensagem.innerHTML = '<h1>Senha correta</h1>';
        sessionStorage.setItem('logado', 1);
        window.location.href = 'outra.html';
    }
    else {
        mensagem.innerHTML = '<h1 style="color: red"> Senha incorreta</h1>';
    }
}
