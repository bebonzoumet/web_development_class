const alvo = 'e7d80ffeefa212b7c5c55700e4f7193e'

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    if (hex_md5(entrada) === alvo) {
        mensagem.innerHTML = '<h1>Senha correta</h1>';
        sessionStorage.setItem('logado', 1);
        window.location.href = 'outra.html';
    }
    else {
        mensagem.innerHTML = '<h1 style="color: red"> Senha incorreta</h1>';
    }
}