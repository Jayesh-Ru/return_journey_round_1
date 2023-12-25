function deepMergeCars(car1, car2) {
  const mergedCar = { ...car1 };

  for (const key in car2) {
    if (car2.hasOwnProperty(key)) {
      if (car2[key] instanceof Object && car1[key] instanceof Object) {

        mergedCar[key] = deepMergeCars(car1[key], car2[key]);
      } else {

        mergedCar[key] = car2[key];
      }
    }
  }

  return mergedCar;
}

// Example usage:
const car1 = {
  brand: 'Toyota',
  model: 'Camry',
  details: {
    color: 'Blue',
    year: 2020,
  },
};

const car2 = {
  model: 'Corolla',
  details: {
    year: 2021,
    fuelType: 'Gasoline',
  },
};

const mergedCar = deepMergeCars(car1, car2);

console.log(mergedCar);
