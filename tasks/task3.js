// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей.
// Потрібно додати поле percentOfSuccess – відсоток медалей від кількості спортсменів.
// Використовуємо лише методи масивів (map тощо). Для округлення – .toFixed(1).

function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(function (item) {
    // рахуємо відсоток медалей
    var percent = 0;

    if (item.athletes > 0) {
      percent = (item.medals / item.athletes) * 100;
    }

    // округляємо до десятих; toFixed повертає рядок, тому обгортаємо в Number
    var roundedPercent = Number(percent.toFixed(1));

    // повертаємо НОВИЙ об’єкт з додатковим полем
    return {
      sport: item.sport,
      athletes: item.athletes,
      medals: item.medals,
      percentOfSuccess: roundedPercent
    };
  });
}

const olympicRepresentation = [
  { sport: 'Swimming',   athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing',     athletes: 15, medals: 5 },
  { sport: 'Athletics',  athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;
