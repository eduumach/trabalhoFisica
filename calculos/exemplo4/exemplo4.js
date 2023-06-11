function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var angulo = parseFloat(document.getElementById("angulo").value);

    // peso tangente

    var pesoTangente = (massa1 * gravidade) * (Math.sin(angulo * Math.PI / 180));

    // Calcular a aceleração
    if ((pesoTangente) > (massa2 * gravidade)) {
        var aceleracao = ((pesoTangente) - (massa2 * gravidade)) / (massa1 + massa2);
        var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
    }
    else {
        var aceleracao = ((massa2 * gravidade) - (pesoTangente)) / (massa1 + massa2);
        var tensao = (massa2 * gravidade) - (massa2 * aceleracao);
    }



    // Exibir o resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
}


// tensao-(massa2*gravidade)=massa2*aceleracao
// tensao=(massa2*aceleracao)+(massa2*gravidade)