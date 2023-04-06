const txtFahrenheit = document.getElementById('fahrenheit');
const txtKelvin = document.getElementById('kelvin');





let entrada = prompt("Ingresa la temperatura en grados Celsius");

if (!isNaN(entrada)) {
    entrada = parseFloat(entrada);
    let fahrenheit = (entrada * 1.8) + 32;
    let kelvin = (entrada + 273.15);
   
    txtFahrenheit.innerHTML = `La temperatura en grados Fahrenheit es:  ${fahrenheit} `;
    txtKelvin.innerHTML = `La temperatura en grados Kelvin es: ${kelvin}`;
} else {
    alert("Debes ingresar solo valores numéricos");
}