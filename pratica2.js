function adicionarLinhaTotalizadora() {
    const tabela = document.getElementById('tabela-notas');
    const tbody = tabela.querySelector('tbody');
    const linhas = tbody.getElementsByTagName('tr');
    const numNotas = linhas[0].getElementsByTagName('td').length - 1; 

    const linhaTotal = document.createElement('tr');
    const celulaTitulo = document.createElement('td');
    celulaTitulo.textContent = 'Média por Nota';
    linhaTotal.appendChild(celulaTitulo);

    for (let i = 1; i <= numNotas; i++) {
        let soma = 0;
        for (let j = 0; j < linhas.length; j++) {
            const valor = parseFloat(linhas[j].getElementsByTagName('td')[i].textContent);
            soma += valor;
        }
        const media = soma / linhas.length;
        const celulaMedia = document.createElement('td');
        celulaMedia.textContent = media.toFixed(2);
        linhaTotal.appendChild(celulaMedia);
    }

    const tfoot = tabela.querySelector('tfoot');
    tfoot.innerHTML = ''; 
    tfoot.appendChild(linhaTotal);
}

function adicionarColunaTotalizadora() {
    const tabela = document.getElementById('tabela-notas');
    const linhas = tabela.getElementsByTagName('tr');

    const cabecalho = linhas[0];
    const novaCelulaCabecalho = document.createElement('th');
    novaCelulaCabecalho.textContent = 'Média por Aluno';
    cabecalho.appendChild(novaCelulaCabecalho);

    for (let i = 1; i < linhas.length; i++) {
        const celulas = linhas[i].getElementsByTagName('td');
        let soma = 0;
        for (let j = 1; j < celulas.length; j++) { 
            soma += parseFloat(celulas[j].textContent);
        }
        const media = soma / (celulas.length - 1);
        const novaCelulaMedia = document.createElement('td');
        novaCelulaMedia.textContent = media.toFixed(2);
        linhas[i].appendChild(novaCelulaMedia);
    }
}
