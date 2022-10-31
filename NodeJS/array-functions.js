const users = ["Anıl", "Cengizhan", "Yunus"];
const users2 = [
  { name: "Anıl", age: 28 },
  { name: "Cengizhan", age: 25 },
  { name: "Anıl", age: 15 },
  { name: "Yunus", age: 31 },
];

/*
    push
    map
    find 
    filter
    some
    every
    includes
*/

// push - Array sonuna eleman ekler.
// users.push("Melez");
// users.push("Ferhat");

// console.log(users);

// map - Array içinde tek tek dönmeye yarar
// users2.map((item) => {
//   console.log(item.name);
// });

// find - Array içinde verilen koşula göre arama yapar. (gelen ilk elemanı yazıyor)
// const result = users2.find((item) => item.age >= 26);

// console.log(result);

// filter - Array içinde filtreleme yapar
// const result = users2.filter((item) => item.age >= 26 && item.name === "Anıl");

// console.log(result);

// some - Array içinde herhangi bir değer uyuyorsa true uymuyorsa false dönüyor
// const result = users2.some((item) => item.age > 20);
// console.log(result);

// every - Arrayde ki tüm şartların uyması gerek
// const result = users2.every((item) => item.age > 15);
// console.log(result);

// includes - Array içinde değer geçiyor mu kontrol eder
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("ayva");

console.log(isIncluded);
