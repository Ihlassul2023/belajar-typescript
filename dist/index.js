"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// perbedaan type data number,string,array,map
// 1.string
// digunakan untuk merepresentasikan teks atau karakter. contoh
let nama = "ihlas sul akbar";
//2.number
//digunakan untuk merepresentasikan angka, baik integer maupun floating-point. contoh
let umur = 23;
//3.array
//digunakan untuk merepresentasikan kumpulan nilai dengan indeks numerik.
let about = ["ihlas sul akbar", "23"];
//4.map
//tidak digunakan secara langsung, tetapi ini merujuk pada struktur data Map di JavaScript. Map adalah kumpulan pasangan kunci-nilai.
let aboutMap = new Map();
aboutMap.set("nama", "ihlas sul akbar");
aboutMap.set("umur", "23");
console.log(aboutMap);
//function and callback
//function
function helo(nama) {
    console.log(`nama saya ${nama}`);
}
helo("ihlas sul akbar");
//callback
function introduc(data, data2, callback) {
    callback(data, data2);
}
introduc("ihlas sul akbar", 23, (a, b) => {
    console.log(`perkenalkan nama saya ${a} umur saya ${b} tahun`);
});
let myName = "ihlas sul akbar";
let age = 23;
let user = {
    nama: "ihlas sul akbar",
    umur: 23,
    alamat: "lingk batulappa",
};
console.log(user);
//runtime async & await
// Fungsi asynchronous dengan async dan await
function ambilData(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`nama saya ihlas sul akbar umur saya ${age} tahun`);
        }, 1000);
    });
}
// Menggunakan fungsi asynchronous dengan await
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Memulai pengambilan data...");
            const hasil = yield ambilData(3);
            console.log("Hasil:", hasil);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
// Memanggil fungsi main
main();
