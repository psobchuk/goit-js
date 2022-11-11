// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }

  // Change code above this line
  return totalSalary;
}
