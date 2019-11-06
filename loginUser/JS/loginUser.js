function cadastrarNovo() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
}


function cadastrarConcluido() {
    // Verificação dos campos em branco
    if (document.getElementById('nomeCadastro').value == '') {
        alert('Nome é um campo obrigatório');
    } else if (document.getElementById('usuarioCadastro').value == '') {
        alert('Usuário é um campo obrigatório');

    } else if (document.getElementById('emailCadastro').value == '') {
        alert('Email é um campo obrigatório');
    } else if(document.getElementById('senhaCadastro').value == '' || document.getElementById('senhaCadastroConfirmacao').value == ''){
        alert('É necessário definir uma senha');
    // Validação das senhas      
    }else if (document.getElementById('senhaCadastro').value == document.getElementById('senhaCadastroConfirmacao').value) {
        document.getElementById('login').style.display = 'block';
        document.getElementById('cadastro').style.display = 'none';
    } else {
        alert("Senhas devem ser iguais");

    }



     

}




