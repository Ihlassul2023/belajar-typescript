const readlineSync = require("readline-sync");
interface User {
  userName: string;
  ageUser: number;
  favoriteColor: string;
}
let ageAverage: number[] = [];
let color: string[] = [];
let unduplicateColor: string[] = [];
let colorFavorite: string[][] = [];
let count: number = 0;
let arr: User[] = [];
for (let i = 1; i <= 5; i++) {
  let userName = readlineSync.question("Masukan nama: ");
  let ageUser = readlineSync.question("Masukan umur: ");
  let favoriteColor = readlineSync.question("Masukan warna favorit: ");
  console.log("====================================");
  arr.push({
    userName,
    ageUser: parseInt(ageUser),
    favoriteColor,
  });
}
ageAverage = arr.map((val) => val.ageUser);
color = arr.map((val) => val.favoriteColor).sort();
unduplicateColor = [...new Set(color)];
for (let i = 0; i < unduplicateColor.length; i++) {
  for (let j = i; j < color.length; j++) {
    if (unduplicateColor[i] == color[j]) {
      count++;
    }
  }
  colorFavorite.push([unduplicateColor[i], count.toString()]);
  count = 0;
}
colorFavorite.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
console.log(`Umur rata-rata = ${ageAverage.reduce((prev, curr) => prev + curr) / ageAverage.length}`);
for (let i = 0; i < colorFavorite.length; i++) {
  console.log(`warna ${colorFavorite[i][0]} muncul : ${colorFavorite[i][1]} kali`);
}
