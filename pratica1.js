function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case 'add':
            resultado = numero1 + numero2;
            break;
        case 'subtract':
            resultado = numero1 - numero2;
            break;
        case 'multiply':
            resultado = numero1 * numero2;
            break;
        case 'divide':
            resultado = numero1 / numero2;
            break;
        default:
            alert('Operação inválida');
            return false;
    }

    const campoResultado = document.getElementById('resultado');
    campoResultado.textContent = `Resultado: ${resultado}`;

    if (resultado > 0) {
        campoResultado.className = 'resultado positivo';
    } else if (resultado < 0) {
        campoResultado.className = 'resultado negativo';
    } else {
        campoResultado.className = 'resultado neutro';
    }

    return false; 
}