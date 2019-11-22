// Carne - 400 gr. por pessoa - + 6 horas - 650 ml
// Cerveja - 1.200 por pessoa - + 6 horas - 2.000 ml
// Refrigerante/agua - 1.000 ml por pessoa + 6 horas - 1.500 ml
// Crianças valem por 0,5

function calcular(){
    let adultos = document.getElementById("adultos").value;
    let crinacas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;
    let resultado = document.getElementById("resultado");

    let qtdeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crinacas);
    let qtdeTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdeTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * crinacas);
    
    resultado.innerHTML = `<p>${qtdeTotalCarne / 1000} kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalCerveja / 355) } latas de Cerveja</P>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalBebidas / 1000) } garrafas (1L) de Bebida</p>`

function carnePP(duracao){
    if (duracao >= 6)
        return 650;
    else
        return 400;
}

function cervejaPP(duracao){
    if (duracao >= 6)
        return 2000;
    else
        return 1200;
}

function bebidaPP(duracao){
    if (duracao >= 6)
        return 1500;
    else
        return 1000;
}

}