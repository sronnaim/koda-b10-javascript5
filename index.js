const printKelvin = (c) => {
  console.log(c + 273.15);
};

const printFahrenheit = (c) => {
  console.log(c * (9 / 5) + 32);
};

const printReamur = (c) => {
  console.log(c * 4) / 5;
};

const conversionRegister = [printKelvin, printFahrenheit, printReamur];

// Tanpa built-in functions
function celciusToAllWithout(c) {
  if (typeof c !== 'number') {
    console.log('A number type is needed');
    return;
  }

  for (let index = 0; index < conversionRegister.length; index++) {
    const fn = conversionRegister[index];
    fn(c);
  }
}

// Dengan built-in functions
function celciusToAllWith(c) {
  const numC = Number(c);

  if (Number.isNaN(numC)) {
    console.log('A number type or digit string is needed');
    return;
  }
  conversionRegister.forEach((fn) => fn(numC));
}

celciusToAllWithout(0);
celciusToAllWith(0);
