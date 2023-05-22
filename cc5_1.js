const temp = [17, 21, 23];
function forecastTemperature(anyArray2) {
  for (let i = 0; i < anyArray2.length; i++) {
    console.log(`${anyArray2[i]}°C in ${i + 1} days...`);
  }
}

forecastTemperature(temp);
