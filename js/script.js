// Variável para controlar o resultado ativo
let activeResult = null;

function showResult(resultId) {
    // Esconde o resultado ativo anterior, se houver
    if (activeResult) {
        document.getElementById(activeResult).classList.remove('active');
    }
    
    // Mostra o novo resultado
    document.getElementById(resultId).classList.add('active');
    activeResult = resultId;
}

function somar(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    
    if (!n1 || !n2) {
        alert("Por favor, digite ambos os números");
        return;
    }
    
    const soma = Number(n1) + Number(n2);
    document.getElementById('resultado').innerHTML = "A soma dos números é " + soma;
    showResult('resultado');
}

function subtrair(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    
    if (!n1 || !n2) {
        alert("Por favor, digite ambos os números");
        return;
    }
    
    const subtracao = Number(n1) - Number(n2);
    document.getElementById('resultado2').innerHTML = "A subtração dos números é " + subtracao;
    showResult('resultado2');
}

function multiplicar(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    
    if (!n1 || !n2) {
        alert("Por favor, digite ambos os números");
        return;
    }
    
    const multiplicacao = Number(n1) * Number(n2);
    document.getElementById('resultado3').innerHTML = "A multiplicação dos números é " + multiplicacao;
    showResult('resultado3');
}

function dividir(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    
    if (!n1 || !n2) {
        alert("Por favor, digite ambos os números");
        return;
    }
    
    if (Number(n2) === 0) {
        alert("Não é possível dividir por zero!");
        return;
    }
    
    const divisao = Number(n1) / Number(n2);
    document.getElementById('resultado4').innerHTML = "A divisão dos números é " + divisao.toFixed(2);
    showResult('resultado4');
}