export function calcular(peso, altura) {
    altura = altura / 100
    let imc = peso / (altura * altura)

    return imc
}
