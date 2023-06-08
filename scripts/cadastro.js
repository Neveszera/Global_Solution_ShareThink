// Função para validar o formulário de cadastro
function validarCadastro() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confSenha = document.getElementsByName('confSenha')[0].value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha !== confSenha) {
        alert('As senhas não coincidem!');
        return false;
    }

    // Validação do telefone utilizando regex
    var telefoneRegex = /^\d{9,15}$/;
    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, insira um telefone válido!');
        return false;
    }

    // Validação do email utilizando regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return false;
    }

    // Armazenando os dados de cadastro no LocalStorage
    var usuario = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
    };

    localStorage.setItem('usuarioCadastro', JSON.stringify(usuario));

    // Redirecionamento para a página de login
    window.location.href = './login.html';

    return true;
}

// Associando a função de validação ao evento de submit do formulário de cadastro
document.querySelector('form[action=""]').addEventListener('submit', function (event) {
    event.preventDefault();
    validarCadastro();
});