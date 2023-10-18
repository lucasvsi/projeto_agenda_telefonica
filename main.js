const form =  document.getElementById('form-contatos');
const nomePessoas = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTelefone = document.getElementById('numero-telefone');

    if(nomePessoas.includes(inputNomePessoa.value)){
        alert(`${inputNomePessoa.value} já foi inserido(a)`);
    } else {
        nomePessoas.push(inputNomePessoa.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomePessoa.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}