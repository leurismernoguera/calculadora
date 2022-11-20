console.log('Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let elemento1 = forma['elemento1'];
    let elemento2 = forma['elemento2'];
    let resultado = parseInt(elemento1.value) + parseInt(elemento2.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar(){
    const forma = document.getElementById('forma');
    let elemento1 = forma['elemento1'];
    let elemento2 = forma['elemento2'];
    let resultado = parseInt(elemento1.value) - parseInt(elemento2.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let elemento1 = forma['elemento1'];
    let elemento2 = forma['elemento2'];
    let resultado = parseInt(elemento1.value) * parseInt(elemento2.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function dividir(){
    const forma = document.getElementById('forma');
    let elemento1 = forma['elemento1'];
    let elemento2 = forma['elemento2'];
    let resultado = parseInt(elemento1.value) / parseInt(elemento2.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
