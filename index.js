// Tanpa built-in functions
function celciusToAll(c) {
  if (typeof c !== 'number') {
    console.log('a number type needed');
    return;
  }

  const getKelvin = (c) => {
    return c + 273.15;
  };

  const getFahrenheit = (c) => {
    return c * (9 / 5) + 32;
  };

  const getReamur = (c) => {
    return (c * 4) / 5;
  };

  console.log(`Kelvin: ${getKelvin(c)}`);
  console.log(`Fahrenheit: ${getFahrenheit(c)}`);
  console.log(`Reamur: ${getReamur(c)}`);
}

// Dengan built-in
function celciusToAllMany(a) {
  if (!Array.isArray(a)) {
    console.log('Array is needed');
    return;
  }

  a.forEach((c) => {
    const celsius = Number(c);
    celciusToAll(celsius);
  });
}

celciusToAll(0);
celciusToAllMany([0, 1, 2, -100, 100]);
