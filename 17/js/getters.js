const date = new Date();
console.log("Date: ", date);

// Повертає день місяця від 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає години
console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
