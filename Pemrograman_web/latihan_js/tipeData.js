//menggabungkan string
const namadepan = "Muhammad";
const namabelakang = "Fahri";

const namalengkap =namadepan + " " + namabelakang;

console.log(namalengkap);

//template literal
const nama = "Fahri";
const kelas = "XI RPL 1";

const pesan = `Nama: ${nama}, Kelas: ${kelas}`;

console.log(pesan);

//number
const umur = 16;
const nilai = 87.5;
const saldo = -5000;

console.log(typeof umur);
console.log(typeof nilai)

const harga = 15000;
const jumlah = 3;

const total = harga * jumlah;

console.log(total);

//boolean
const sudahMembayar = true;//menyatakan benar
const sedanglibur =false;//menyatakan salah

//boolean sering diperoleh dari hasil perbandingan
const nilai = 85;
const lulus = nilai >= 75;

console.log(lulus);

//undefined
let nomorTelepon;

console.log(nomorTelepon);

//nulll
const fotoProfil = null;

console.log(fotoProfil);

//mengenali tipe data
let nama = "Fahri";
console.log(typeof nama);

let umur = 16;
console.log(typeof umur);

let sudahMenikah = false;
console.log(typeof sudahMenikah);

let alamat;
console.log(typeof alamat);

//konversi tipe data
const nilai = Number("85");
const nilaike2 = Number("82");


console.log(nilai + nilaike2);

//mengubah menjadi number
const nilai3 =- Number("90");

console.log(nilai3);
console.log(typeof nilai3);

//mengubah menjadi string
const umur = 16;
const umurTeks = String(umur);

console.log(umurTeks);
console.log(typeof umurTeks);

//mengubah menjadi boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Fahri"));
console.log(Boolean(""));

//mengenal NaN
const nilai1 = Number("Fahri");

console.log(nilai1);

//untuk memeriksa apakah nilai adalah NaN, gunakan fungsi Number.isNaN()
const nilai11 = Number("Fahri");

if (Number.isNaN(nilai11)) {
    console.log("Nilai bukan angka");
}

//studi kasus #1-- Menyimpan data pendaftaran siswa
const namaSiswa = "Fahri";
const umurSiswa = 16;
const sudahMendaftar = true;
const nomorTelepon = null;

console.log(`Nama: ${namaSiswa}`);
console.log(`Umur: ${umurSiswa}`);
console.log(`Sudah mendaftar: ${sudahMendaftar}`);
console.log(`Nomor telepon: ${nomorTelepon}`);
