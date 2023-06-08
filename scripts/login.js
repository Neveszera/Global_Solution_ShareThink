// Função para validar o formulário de login
function validarLogin() {
    var email = document.getElementsByName('email')[0].value;
    var senha = document.getElementsByName('senha')[0].value;

    // Validação do email utilizando regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return false;
    }

    // Verificação da existência do cadastro no LocalStorage
    var usuarioCadastro = JSON.parse(localStorage.getItem('usuarioCadastro'));
    if (!usuarioCadastro) {
        alert('Nenhum usuário cadastrado. Por favor, faça o cadastro primeiro!');
        return false;
    }

    // Verificação das credenciais de login
    if (email !== usuarioCadastro.email || senha !== usuarioCadastro.senha) {
        alert('Credenciais de login inválidas!');
        return false;
    }

    // Redirecionamento para a página do usuário
    window.location.href = '../pages/user.html';

    return true;
}

// Associando a função de validação ao evento de submit do formulário de login
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    validarLogin();
});