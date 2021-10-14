function calcular() {
    let n1 = Number(window.prompt('Digite um número'));
    let n2 = Number(window.prompt('Digite outro número:'));
    let res = document.getElementById('resultado');

    if(n1 > n2) {
        res.innerHTML = `O número ${n1} é maior!`;
    } else {
        res.innerHTML = `O número ${n2} é maior!`;
    }
}