
function sortearNumero() {
    const numero = Math.floor(Math.random() * 9999) + 1;
    document.getElementById('resultado').textContent = `Número sorteado: ${numero}`;
}