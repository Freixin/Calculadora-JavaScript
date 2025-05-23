<!DOCTYPE html>
<html>
    <head>
        <title>Calculadora JavaScript</title>
        <meta charset="UTF-8"/>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
            }
            
            .calculator {
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                padding: 25px;
                width: 300px;
                transform: scale(0.95);
                opacity: 0;
                animation: appear 0.5s ease-out forwards;
            }
            
            @keyframes appear {
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            .input-group {
                margin-bottom: 15px;
                animation: slideIn 0.4s ease-out;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            label {
                display: block;
                margin-bottom: 5px;
                color: #555;
            }
            
            input[type="text"] {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-sizing: border-box;
                transition: border-color 0.3s;
            }
            
            input[type="text"]:focus {
                border-color: #4CAF50;
                outline: none;
            }
            
            .buttons {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-bottom: 20px;
            }
            
            input[type="button"] {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 12px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
                transform: scale(1);
            }
            
            input[type="button"]:hover {
                background-color: #45a049;
                transform: scale(1.05);
            }
            
            input[type="button"]:active {
                transform: scale(0.98);
            }
            
            .result-container {
                margin-top: 15px;
                padding: 15px;
                background-color: #f0f0f0;
                border-radius: 5px;
                min-height: 60px;
                position: relative;
                overflow: hidden;
            }
            
            .result {
                position: absolute;
                width: 100%;
                left: 0;
                padding: 15px;
                box-sizing: border-box;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease-out;
            }
            
            .result.active {
                opacity: 1;
                transform: translateY(0);
            }
            
            .result h1 {
                color: #333;
                font-size: 18px;
                margin: 0;
                padding: 0;
                border-left: none;
                background-color: transparent;
            }
        </style>

        <script>
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
        </script>
    </head>
    <body>
        <div class="calculator">
            <form action="">    
                <div class="input-group">
                    <label for="n1">Número 1:</label>
                    <input type="text" id="n1" placeholder="Digite o primeiro número"/>
                </div>
                
                <div class="input-group" style="animation-delay: 0.1s">
                    <label for="n2">Número 2:</label>
                    <input type="text" id="n2" placeholder="Digite o segundo número"/>
                </div>

                <div class="buttons">
                    <input type="button" value="Somar" onclick="somar()"/>
                    <input type="button" value="Subtrair" onclick="subtrair()"/>
                    <input type="button" value="Multiplicar" onclick="multiplicar()"/>
                    <input type="button" value="Dividir" onclick="dividir()"/>
                </div>
                
                <div class="result-container">
                    <div id="resultado" class="result">
                        <h1>A soma dos números é </h1>
                    </div>
                    <div id="resultado2" class="result">
                        <h1>A subtração dos números é </h1>
                    </div>
                    <div id="resultado3" class="result">
                        <h1>A multiplicação dos números é </h1>
                    </div>
                    <div id="resultado4" class="result">
                        <h1>A divisão dos números é </h1>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>