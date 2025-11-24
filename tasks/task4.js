// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією
// про її бренд, модель і витрату палива.
// Завдання – перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км.
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {
  // 1. Перевіряємо, що всі авто мають витрату палива < 6
  var allEfficient = cars.every(function (car) {
    return car.fuelConsumption < 6;
  });

  // Якщо хоч одна машина має витрату >= 6 – повертаємо порожній масив
  if (!allEfficient) {
    return [];
  }

  // 2. Фільтруємо авто за потрібним брендом
  var brandCars = cars.filter(function (car) {
    return car.brand === brand;
  });

  // Якщо машин цього бренду немає – теж порожній масив
  if (brandCars.length === 0) {
    return [];
  }

  // 3. Знаходимо мінімальну витрату палива серед цього бренду
  var minConsumption = brandCars[0].fuelConsumption;

  brandCars.forEach(function (car) {
    if (car.fuelConsumption < minConsumption) {
      minConsumption = car.fuelConsumption;
    }
  });

  // 4. Повертаємо всі машини цього бренду з мінімальною витратою палива
  var mostEfficient = brandCars.filter(function (car) {
    return car.fuelConsumption === minConsumption;
  });

  return mostEfficient;
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda',  model: 'Civic',   fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry',   fuelConsumption: 5.5 },
  { brand: 'Ford',   model: 'Focus',   fuelConsumption: 6.1 },
  { brand: 'Honda',  model: 'Accord',  fuelConsumption: 5.8 },
  { brand: 'Audi',   model: 'A3',      fuelConsumption: 5.4 },
  { brand: 'Audi',   model: 'Q5',      fuelConsumption: 5.7 },
  { brand: 'Dodge',  model: 'Charger', fuelConsumption: 5.8 },
  { brand: 'Dodge',  model: 'Durango', fuelConsumption: 5.6 },
];

console.log(getMostFuelEfficientCars(cars, 'Toyota'));
console.log(getMostFuelEfficientCars(cars, 'Honda'));
console.log(getMostFuelEfficientCars(cars, 'Audi'));
console.log(getMostFuelEfficientCars(cars, 'Dodge'));
console.log(getMostFuelEfficientCars(cars, 'Ford'));

module.exports = getMostFuelEfficientCars;
