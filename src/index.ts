// perbedaan type data number,string,array,map
// 1.string
// digunakan untuk merepresentasikan teks atau karakter. contoh
let nama: string = "ihlas sul akbar";

//2.number
//digunakan untuk merepresentasikan angka, baik integer maupun floating-point. contoh
let umur: number = 23;

//3.array
//digunakan untuk merepresentasikan kumpulan nilai dengan indeks numerik.
let about: string[] = ["ihlas sul akbar", "23"];

//4.map
//tidak digunakan secara langsung, tetapi ini merujuk pada struktur data Map di JavaScript. Map adalah kumpulan pasangan kunci-nilai.

let aboutMap = new Map<string, string>();
aboutMap.set("nama", "ihlas sul akbar");
aboutMap.set("umur", "23");
console.log(aboutMap);

//function and callback
//function
function helo(nama: string): void {
  console.log(`nama saya ${nama}`);
}
helo("ihlas sul akbar");

//callback
function introduc(data: string, data2: number, callback: (nama: string, umur: number) => void): void {
  callback(data, data2);
}
introduc("ihlas sul akbar", 23, (a, b) => {
  console.log(`perkenalkan nama saya ${a} umur saya ${b} tahun`);
});

//types and interface
//types
type saya = number | string;

let myName: saya = "ihlas sul akbar";
let age: saya = 23;

//interface
interface me {
  nama: string;
  umur: number;
}
interface aboutMe extends me {
  alamat: string;
}
let user: aboutMe = {
  nama: "ihlas sul akbar",
  umur: 23,
  alamat: "lingk batulappa",
};
console.log(user);

//runtime async & await
// Fungsi asynchronous dengan async dan await
async function ambilData(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(`nama saya ihlas sul akbar umur saya ${age} tahun`);
    }, 1000);
  });
}

// Menggunakan fungsi asynchronous dengan await
async function main(): Promise<void> {
  try {
    console.log("Memulai pengambilan data...");
    const hasil: string = await ambilData(3);
    console.log("Hasil:", hasil);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Memanggil fungsi main
main();
